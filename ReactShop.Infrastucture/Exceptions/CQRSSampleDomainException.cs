using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Infrastructure.Exceptions
{
    public class CQRSSampleDomainException : Exception
    {
        public CQRSSampleDomainException()
        {
        }

        public CQRSSampleDomainException(string message)
            : base(message)
        {
        }

        public CQRSSampleDomainException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
