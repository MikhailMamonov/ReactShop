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
    [Route("[controller]")]
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

        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] UserDTO userDTO)
        {
            try
            {
                if (userDTO == null)
                {
                    _logger.LogError("User Object is null");
                    return BadRequest("User Object is null");
                }

                if (!ModelState.IsValid)
                {
                    _logger.LogError("User Object is null");
                    return BadRequest("Invalid model object");
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
                    return Ok(user);
                }
                else
                {
                    _logger.LogError(errorMessage);
                    return StatusCode(500, errorMessage);
                }
            }
            catch (Exception e) {
                _logger.LogError($"{e.Message} -> {e.StackTrace}");
                return StatusCode(500, e);
            }
            
        }

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                var users = await _usersService.GetUsersAsync();
                _logger.LogInfo($"\n Getting list of users -> {users}");
                var usersDTO = _mapper.Map<List<UserDTO>>(users);
                return Ok(usersDTO);
            }
            catch (System.Exception e) 
            {
                var err = string.Join(System.Environment.NewLine, e.Message, e.StackTrace);
                _logger.LogError(err);
                return StatusCode(500, $"{e.Message} -> {e.StackTrace}"); 
            }
            
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
        {
            var result = await _usersService.UpdateUserAsync(id, user);
            if (!result)
                return BadRequest("User not updated");
            else
                return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var users = await _usersService.GetUsersAsync();
            if (!users.Any(user => user.Id == id))
            {
                return BadRequest("User id not found");
            }
            var result = await _usersService.DeleteUser(id);
            if (!result)
                return BadRequest("User not deleted");
            else
                return Ok(string.Format("user with id -> {0} succes deleted",id));
        }
    }
}
