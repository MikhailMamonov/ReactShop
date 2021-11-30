using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Web.Handling.Authentication.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Http;
using ReactShop.Web.Handling.Authentication;
using ReactShop.Web.Authentication;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Users;
using ReactShop.Core.Entities;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        public IUsersService Service { get; }
        private readonly IMediator _mediator;

        public AuthController(
            IUsersService usersService,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            IConfiguration configuration,
            IMapper mapper, IMediator mediator)
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
            _configuration = configuration;
            _mapper = mapper;
            Service = usersService;
            _signInManager = signInManager;
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
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

                        var authSigningKey =
                            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                        var token = new JwtSecurityToken(
                            issuer: _configuration["JWT:ValidIssuer"],
                            audience: _configuration["JWT:ValidAudience"],
                            expires: DateTime.Now.AddHours(3),
                            claims: authClaims,
                            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                        );

                        var config = new MapperConfiguration(cfg => {
                            cfg.CreateMap<ApplicationUser, UserModel>();
                            cfg.CreateMap<ShoppingCart, ShoppingCartModel>();
                        });

                        var mapper = config.CreateMapper();
                        UserModel userModel = mapper.Map<ApplicationUser,UserModel>(user);

                        return Ok(new
                        {
                            accessToken = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                            user = userModel
                        });
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
    }
}