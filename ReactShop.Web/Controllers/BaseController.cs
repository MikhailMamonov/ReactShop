using AutoMapper;
using Microsoft.AspNetCore.Cors;
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
        protected IDatabaseService<T> _databaseService { get; private set;}
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
                return Ok(objectList);
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

        public async Task<IActionResult> Post([FromBody] T requestValue)
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

                var newObject =
                    await _databaseService.Add(requestValue);
                return Ok(newObject);

            };

            return await ExecuteCommand(exceptionCommand);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(string id, [FromBody] T requestValue)
        {
            return await ExecuteCommand(async () =>
            {
                var result = await _databaseService.Edit(requestValue);
                if (!string.IsNullOrEmpty(result))
                    return LogErrorAndReturnStatusCode("ApplicationUser not updated", 400);
                else
                    return Ok(requestValue);
            });
        }


        [HttpPut("{id:int}")]
        public async Task<IActionResult> Edit(int id, [FromBody] T requestValue)
        {
            return await ExecuteCommand(async () =>
            {
                var result = await _databaseService.Edit(requestValue);
                if (!string.IsNullOrEmpty(result))
                    return LogErrorAndReturnStatusCode("ApplicationUser not updated", 400);
                else
                    return Ok(requestValue);
            });
        }

        [HttpDelete("{id:int}")]
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(string id)
        {
            try
            {
                return await this.ExecuteCommand(
                async () =>
                {
                    var errorMessage = await this._databaseService.Remove(id.ToString());

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
            catch (Exception)
            {

                throw;
            }

        }

        protected async Task<IActionResult> ExecuteCommand(Func<Task<IActionResult>> action)
        {
            try
            {
               return await action();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                throw;
            }
        }

        protected IActionResult LogErrorAndReturnStatusCode(string errMessage, int statusCode)
        {
            
            return StatusCode(statusCode, errMessage);
        }
    }
}
