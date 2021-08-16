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

namespace ReactShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IMapper _mapper;
        private ILoggerManager _logger;

        IUsersService _usersService;
        public UsersController(IUsersService usersService, IMapper mapper, ILoggerManager logger)
        {
            _usersService = usersService;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] UserDTO userDTO)
        {
            try
            {
                if (userDTO == null)
                {
                    return LogErrorAndReturnStatusCode("User Object is null", 400);
                }

                if (!ModelState.IsValid)
                {
                    return LogErrorAndReturnStatusCode("Model is invalid", 400);
                }

                var user = new User
                {
                    DisplayName = userDTO.DisplayName,
                    UserName = userDTO.DisplayName,
                    Email = userDTO.Email,
                    PasswordHash = userDTO.Password
                };

                var errorMessage = await _usersService.AddUserAsync(user, userDTO.Password);
                if (errorMessage == null)
                {
                    _logger.LogInfo($"\nUser Object added ${user}");
                    return Ok(new { user });
                }
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }
            }
            catch (Exception e) {
                return LogErrorAndReturnStatusCode($"{e.InnerException} -> {e.StackTrace}", 500);
            }
            
        }


        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                var users = await _usersService.GetUsersAsync();
                var usersDTO = _mapper.Map<List<UserDTO>>(users);

                return Ok(new { users = usersDTO });
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.Message} -> {e.StackTrace}", 500);
            }

        }



        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
        {
            var result = await _usersService.UpdateUserAsync(id, user);
            if (string.IsNullOrEmpty(result))
                return LogErrorAndReturnStatusCode("User not updated", 400);
            else
                return Ok(user);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            try
            {                
                var errorMessage = await _usersService.DeleteUserAsync(id);

                if (string.IsNullOrEmpty(errorMessage))
                    return Ok(
                        new {id = id, message = string.Format("user with id -> {0} succes deleted", id) });
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.Message} -> {e.StackTrace}", 500);
            }
            
        }

        private IActionResult LogErrorAndReturnStatusCode(string errMessage, int statusCode)
        {
            _logger.LogError(errMessage);
            return StatusCode(statusCode, errMessage);
        }
    }
}
