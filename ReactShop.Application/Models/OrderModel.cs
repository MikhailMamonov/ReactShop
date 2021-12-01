using System;
using ReactShop.Application.Models.Base;

namespace ReactShop.Application.Models
{
    public class OrderModel : BaseModel
    {
        public string ZipCode { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public decimal OrderTotal { get; set; }

        public DateTime OrderPlaced { get; set; }

        public string UserId { get; set; }
    }
}
