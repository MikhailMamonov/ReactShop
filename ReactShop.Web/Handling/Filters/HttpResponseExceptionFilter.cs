using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

using ReactShop.Handling;

namespace OnlineShop.Handling.Filters
{
    public class HttpResponseExceptionFilter : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context) { }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            if (context.Exception is HttpResponseException)
            {
                var ex = (HttpResponseException)context.Exception;
                context.Result = new ContentResult()
                {
                    StatusCode = ex.StatusCode,
                    Content = ex.Message,
                    ContentType = ex.ContentType
                };
                context.ExceptionHandled = true;
            }
        }
    }
}
