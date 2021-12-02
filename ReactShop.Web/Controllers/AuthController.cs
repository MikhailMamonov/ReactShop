using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Http;
using ReactShop.Web.Handling.Authentication;
using ReactShop.Web.Authentication;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Users;
using ReactShop.Core.Entities;
using ReactShop.Infrastructure.Data;
using ReactShop.Web.Authentication.Configuration;
using ReactShop.Web.Authentication.Models;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly JwtBearerTokenSettings jwtBearerTokenSettings;
        private readonly ApplicationDbContext _dbContext;

        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        public IUsersService Service { get; }
        private readonly IMediator _mediator;

        public AuthController(
            IOptions<JwtBearerTokenSettings> jwtTokenOptions,
            IUsersService usersService,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            IConfiguration configuration,
            IMapper mapper, IMediator mediator,
            ApplicationDbContext dbContext
            )
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
            this._dbContext = dbContext;
            _configuration = configuration;
            _mapper = mapper;
            Service = usersService;
            _signInManager = signInManager;
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            this.jwtBearerTokenSettings = jwtTokenOptions.Value;
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            try
            {
                var user = await _userManager.Users.Include(u => u.ShoppingCart)
                    .FirstOrDefaultAsync(u => u.UserName == model.Username);


                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    var userRoles = await _userManager.GetRolesAsync(user);

                    var authClaims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, user.UserName),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    };

                    if (user.ShoppingCart == null)
                    {
                        var createShoppingCartCommand = new CreateShoppingCartCommand()
                        {
                            UserId = user.Id,
                        };

                        var shoppingCartEntity = await _mediator.Send(createShoppingCartCommand);

                        if (shoppingCartEntity != null)
                        {
                            user.ShoppingCart = shoppingCartEntity;
                            //user.ShoppingCart = shoppingCartEntity;
                        }

                        await _userManager.UpdateAsync(user);
                    }

                    var result = await _signInManager.PasswordSignInAsync(user.UserName, model.Password, false, false);
                    if (result.Succeeded)
                    {
                        foreach (var userRole in userRoles)
                        {
                            authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                        }
                        
                        var token = GenerateTokens(user);

                        var config = new MapperConfiguration(cfg => {
                            cfg.CreateMap<ApplicationUser, UserModel>();
                            cfg.CreateMap<ShoppingCart, ShoppingCartModel>();
                        });

                        var mapper = config.CreateMapper();
                        UserModel userModel = mapper.Map<ApplicationUser,UserModel>(user);

                        return Ok(new { accessToken = token, Message = "Success", user = userModel });
                    }
                }

                return Unauthorized();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError,
                    new Model { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                // установка куки
                await _signInManager.SignInAsync(user, false);

                var errors = result.Errors.Select(er => er.Description);
                return StatusCode(StatusCodes.Status500InternalServerError,
                    new Model { Status = "Error", Message = string.Join("\n", errors) });
            }

            return Ok(new Model { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("RevokeToken")]
        public IActionResult RevokeToken(string token)
        {
            // If user found, then revoke
            if (RevokeRefreshToken(token))
            {
                return Ok(new { Message = "Success" });
            }

            // Otherwise, return error
            return new BadRequestObjectResult(new { Message = "Failed" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError,
                    new Model { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError,
                    new Model
                    {
                        Status = "Error", Message = "User creation failed! Please check user details and try again."
                    });

            if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await _userManager.AddToRoleAsync(user, UserRoles.Admin);
            }

            return Ok(new Model { Status = "Success", Message = "User created successfully!" });
        }

        private string GenerateTokens(ApplicationUser identityUser)
        {
            // Generate access token
            string accessToken = GenerateAccessToken(identityUser);

            // Generate refresh token and set it to cookie
            var ipAddress = HttpContext.Connection.RemoteIpAddress.ToString();
            var refreshToken = GenerateRefreshToken(ipAddress, identityUser.Id);

            // Set Refresh Token Cookie
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            HttpContext.Response.Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);

            // Save refresh token to database
            if (identityUser.RefreshTokens == null)
            {
                identityUser.RefreshTokens = new List<RefreshToken>();
            }

            identityUser.RefreshTokens.Append(refreshToken);
            _dbContext.Update(identityUser);
            _dbContext.SaveChanges();
            return accessToken;
        }

        private string GenerateAccessToken(ApplicationUser identityUser)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(jwtBearerTokenSettings.SecretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, identityUser.UserName.ToString()),
                    new Claim(ClaimTypes.Email, identityUser.Email)
                }),

                Expires = DateTime.Now.AddSeconds(jwtBearerTokenSettings.ExpiryTimeInSeconds),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = jwtBearerTokenSettings.Audience,
                Issuer = jwtBearerTokenSettings.Issuer
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private RefreshToken GenerateRefreshToken(string ipAddress, string userId)
        {
            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var randomBytes = new byte[64];
                rngCryptoServiceProvider.GetBytes(randomBytes);
                return new RefreshToken
                {
                    Token = Convert.ToBase64String(randomBytes),
                    ExpiryOn = DateTime.UtcNow.AddDays(jwtBearerTokenSettings.RefreshTokenExpiryInDays),
                    CreatedOn = DateTime.UtcNow,
                    CreatedByIp = ipAddress,
                    UserId = userId
                };
            }
        }


        private bool RevokeRefreshToken(string token = null)
        {
            token = token == null ? HttpContext.Request.Cookies["refreshToken"] : token;
            var identityUser = _dbContext.Users.Include(x => x.RefreshTokens)
                .FirstOrDefault(x => x.RefreshTokens.Any(y => y.Token == token && y.UserId == x.Id));
            if (identityUser == null)
            {
                return false;
            }

            // Revoke Refresh token
            var existingToken = identityUser.RefreshTokens.FirstOrDefault(x => x.Token == token);
            existingToken.RevokedByIp = HttpContext.Connection.RemoteIpAddress.ToString();
            existingToken.RevokedOn = DateTime.UtcNow;
            _dbContext.Update(identityUser);
            _dbContext.SaveChanges();
            return true;
        }

        private bool IsRefreshTokenValid(RefreshToken existingToken)
        {
            // Is token already revoked, then return false
            if (existingToken.RevokedByIp != null && existingToken.RevokedOn != DateTime.MinValue)
            {
                return false;
            }

            // Token already expired, then return false
            if (existingToken.ExpiryOn <= DateTime.UtcNow)
            {
                return false;
            }

            return true;
        }

    }
}