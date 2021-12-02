//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Tokens.Jwt;
//using System.Linq;
//using System.Security.Claims;
//using System.Security.Cryptography;
//using System.Text;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Microsoft.Extensions.Options;
//using Microsoft.IdentityModel.Tokens;
//using ReactShop.Core.Entities;
//using ReactShop.Web.Authentication.Configuration;

//namespace ReactShop.Web.Utils
//{
//    public interface IJwtUtils
//    {
//        public string GenerateJwtToken(ApplicationUser user);
//        public int? ValidateJwtToken(string token);
//        public RefreshToken GenerateRefreshToken(string ipAddress);
//    }

//    public class JwtUtils : IJwtUtils
//    {
//        private readonly JwtBearerTokenSettings jwtBearerTokenSettings;

//        public JwtUtils(IOptions<JwtBearerTokenSettings> jwtTokenOptions)
//        {
//            this.jwtBearerTokenSettings = jwtTokenOptions.Value;
//        }

//        private string GenerateTokens(ApplicationUser identityUser)
//        {
//            // Generate access token
//            string accessToken = GenerateAccessToken(identityUser);

//            // Generate refresh token and set it to cookie
//            var ipAddress = HttpContext.Connection.RemoteIpAddress.ToString();
//            var refreshToken = GenerateRefreshToken(ipAddress, identityUser.Id);

//            // Set Refresh Token Cookie
//            var cookieOptions = new CookieOptions
//            {
//                HttpOnly = true,
//                Expires = DateTime.UtcNow.AddDays(7)
//            };
//            HttpContext.Response.Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);

//            // Save refresh token to database
//            if (identityUser.RefreshTokens == null)
//            {
//                identityUser.RefreshTokens = new List<RefreshToken>();
//            }

//            identityUser.RefreshTokens.Add(refreshToken);
//            dbContext.Update(identityUser);
//            dbContext.SaveChanges();
//            return accessToken;
//        }

//        private string GenerateAccessToken(ApplicationUser identityUser)
//        {
//            var tokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.ASCII.GetBytes(jwtBearerTokenSettings.SecretKey);

//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = new ClaimsIdentity(new Claim[]
//                {
//                    new Claim(ClaimTypes.Name, identityUser.UserName.ToString()),
//                    new Claim(ClaimTypes.Email, identityUser.Email)
//                }),

//                Expires = DateTime.Now.AddSeconds(jwtBearerTokenSettings.ExpiryTimeInSeconds),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
//                Audience = jwtBearerTokenSettings.Audience,
//                Issuer = jwtBearerTokenSettings.Issuer
//            };

//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            return tokenHandler.WriteToken(token);
//        }

//        private RefreshToken GenerateRefreshToken(string ipAddress, string userId)
//        {
//            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
//            {
//                var randomBytes = new byte[64];
//                rngCryptoServiceProvider.GetBytes(randomBytes);
//                return new RefreshToken
//                {
//                    Token = Convert.ToBase64String(randomBytes),
//                    ExpiryOn = DateTime.UtcNow.AddDays(jwtBearerTokenSettings.RefreshTokenExpiryInDays),
//                    CreatedOn = DateTime.UtcNow,
//                    CreatedByIp = ipAddress,
//                    UserId = userId
//                };
//            }
//        }

//    }
//}
