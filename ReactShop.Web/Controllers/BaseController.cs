using AutoMapper;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ReactShop.LoggerService;
using System;
using System.Threading.Tasks;
using ReactShop.Application.Services.Rest;


namespace ReactShop.Web.Controllers
{

    [Route("api/[controller]")]
    public class BaseController<TViewModel> : Controller where TViewModel : class
    {
        protected IRestService<TViewModel> RestService { get; private set; }
        public IMapper Mapper1 { get; }
        public ILoggerManager Logger { get; }


        public BaseController(IRestService<TViewModel> restService, IMapper mapper, ILoggerManager logger)
        {
            RestService = restService;
            Mapper1 = mapper;
            Logger = logger;
        }

        
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var objectList = await RestService.GetAll();
                return Ok(objectList);
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
            }
        }

        //[Authorize]
        //[HttpGet("{id}")]
        //public async Task<IActionResult> Get(int id)
        //{
        //    var item =await RestService.GetById(id.ToString());
        //    return Ok(new { item });
        //}

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
                await RestService.Add(requestValue);
            return Ok(newObject);

        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(string id, [FromBody] TViewModel requestValue)
        {
            await RestService.Edit(requestValue);
            return Ok(requestValue);

        }

        [Authorize]
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Edit(int id, [FromBody] TViewModel requestValue)
        {
            await RestService.Edit(requestValue);
            return Ok(requestValue);
        }

        //[Authorize]
        //[HttpDelete("{id:int}")]
        //public async Task<IActionResult> Remove(int id)
        //{
        //    try
        //    {
        //        await RestService.Remove(id.ToString());
        //        return Ok(
        //            new { id, message = string.Format("object with id -> {0} succes deleted", id) });
        //    }
        //    catch (Exception e)
        //    {
        //        return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
        //    }
        //}

        //[Authorize]
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Remove(string id)
        //{
        //    try
        //    {
        //        await RestService.Remove(id);
        //        return Ok(new { id, message = string.Format("object with id -> {0} succes deleted", id) });

        //    }
        //    catch (Exception e)
        //    {
        //        return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
        //    }

        //}

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
