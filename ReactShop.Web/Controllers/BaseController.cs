using AutoMapper;

using Microsoft.AspNetCore.Authorization;
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
    public class BaseController<TDomain, TViewModel> : Controller where TDomain : class where TViewModel : class
    {
        protected IRestService<TDomain, TViewModel> _restService { get; private set; }
        private readonly IMapper _mapper;
        private ILoggerManager _logger;


        public BaseController(IRestService<TDomain, TViewModel> restService, IMapper mapper, ILoggerManager logger)
        {
            _restService = restService;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpGet]

        public async Task<IActionResult> Get()
        {
            try
            {
                var objectList = await _restService.GetAll();
                return Ok(objectList);
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var item =await _restService.GetById(id.ToString());
            return Ok(new { item });
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TViewModel requestValue)
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
                await _restService.Add(requestValue);
            return Ok(newObject);

        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(string id, [FromBody] TViewModel requestValue)
        {
            await _restService.Edit(requestValue);
            return Ok(requestValue);

        }

        [Authorize]
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Edit(int id, [FromBody] TViewModel requestValue)
        {
            await _restService.Edit(requestValue);
            return Ok(requestValue);
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Remove(int id)
        {
            try
            {
                await _restService.Remove(id.ToString());
                return Ok(
                    new { id = id, message = string.Format("object with id -> {0} succes deleted", id) });
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(string id)
        {
            try
            {
                await _restService.Remove(id.ToString());
                return Ok(new { id, message = string.Format("object with id -> {0} succes deleted", id) });

            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
            }

        }

        //protected async Task<IActionResult> ExecuteCommand(Func<IActionResult> action)
        //{
        //    try
        //    {
        //        return await action();
        //    }
        //    catch (Exception e)
        //    {
        //        _logger.LogError($"{e.Message} \n {e.InnerException} \n {e.StackTrace}");
        //        throw;
        //    }
        //}

        protected IActionResult LogErrorAndReturnStatusCode(string errMessage, int statusCode)
        {

            return StatusCode(statusCode, errMessage);
        }
    }
}
