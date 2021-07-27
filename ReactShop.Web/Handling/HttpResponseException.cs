using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Handling
{
    public class HttpResponseException : Exception
    {
        public int StatusCode { get; private set; }
        public string ContentType { get; private set; } = "text/plain";

        public HttpResponseException(int statusCode)
        {
            StatusCode = statusCode;
        }

        public HttpResponseException(int statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
        }
    }
}
