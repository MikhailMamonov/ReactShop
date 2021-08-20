using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactShop.LoggerService;
using ReactShop.Services.Implementations;
using ReactShop.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Web.Controllers
{
    [Route("api/[controller]")]
    public class BaseController<T> : Controller where T : class
    {
        private IDatabaseService<T> _databaseService;

        private readonly IMapper _mapper;
        private ILoggerManager _logger;
        

        public BaseController(IDatabaseService<T> databaseService, IMapper mapper, ILoggerManager logger)
        {
            _databaseService = databaseService;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return await ExecuteCommand(async () =>
            {
                var objectList = await _databaseService.GetList();
                return Ok(new { objectList });
            });
           
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return await ExecuteCommand(async () =>
            {
                var item = await _databaseService.GetItem(id.ToString());
                return Ok(new { item });
            });
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> Post(Guid id, [FromBody] T requestValue)
        {
            Func<Task<IActionResult>> exceptionCommand = async () =>
            {
                if (requestValue == null)
                {
                    return LogErrorAndReturnStatusCode("Product Object is null", 400);
                }

                if (!ModelState.IsValid)
                {
                    return LogErrorAndReturnStatusCode("Model is invalid", 400);
                }

                var errorMessage =
                    await _databaseService.Add(requestValue);

                if (errorMessage == null)
                {
                    _logger.LogInfo($"\nProduct Object added ${requestValue}");
                    return Ok(new { requestValue });
                }
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }
            };

            return await ExecuteCommand(exceptionCommand);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] T requestValue)
        {
            return await ExecuteCommand(async () =>
            {
                var result = await _databaseService.Edit(requestValue);
                if (string.IsNullOrEmpty(result))
                    return LogErrorAndReturnStatusCode("ApplicationUser not updated", 400);
                else
                    return Ok(requestValue);
            });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            return await ExecuteCommand(
                async () =>
                {
                    var errorMessage = await _databaseService.Remove(id.ToString());

                    if (string.IsNullOrEmpty(errorMessage))
                        return Ok(
                            new { id = id, message = string.Format("object with id -> {0} succes deleted", id) });
                    else
                    {
                        return LogErrorAndReturnStatusCode(errorMessage, 500);
                    }
                }
            );  
        }

        private async Task<IActionResult> ExecuteCommand(Func<Task<IActionResult>> action)
        {
            try
            {
               return await action();
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.InnerException} ->" +
                    $" {e.StackTrace}", 500);
            }
        }

        private IActionResult LogErrorAndReturnStatusCode(string errMessage, int statusCode)
        {
            _logger.LogError(errMessage);
            return StatusCode(statusCode, errMessage);
        }
    }
}
