using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;

using ReactShop.LoggerService;
using ReactShop.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : BaseController<UserDTO>
    {
        public UsersController(IDatabaseService<UserDTO> usersService, IMapper mapper, ILoggerManager logger)
            : base(usersService,mapper, logger)
        {
        }

       

        //[HttpPost]
        //public async Task<IActionResult> AddUser([FromBody] RegisterModel userDTO)
        //{
        //    try
        //    {
        //        if (userDTO == null)
        //        {
        //            return LogErrorAndReturnStatusCode("ApplicationUser Object is null", 400);
        //        }

        //        if (!ModelState.IsValid)
        //        {
        //            return LogErrorAndReturnStatusCode("Model is invalid", 400);
        //        }

        //        var user = new UserDTO
        //        {
        //            DisplayName = userDTO.DisplayName,
        //            UserName = userDTO.DisplayName,
        //            Email = userDTO.Email,
        //            PasswordHash = userDTO.Password
        //        };

        //        var errorMessage = await _usersService.Add(user, userDTO.Password);
        //        if (errorMessage == null)
        //        {
        //            _logger.LogInfo($"\nUser Object added ${user}");
        //            return Ok(new { user });
        //        }
        //        else
        //        {
        //            return LogErrorAndReturnStatusCode(errorMessage, 500);
        //        }
        //    }
        //    catch (Exception e) {
        //        return LogErrorAndReturnStatusCode($"{e.InnerException} -> {e.StackTrace}", 500);
        //    }

        //}
    }
}
