using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration.UserSecrets;
using ReactShop.Core.Entities.Base;

#nullable disable

namespace ReactShop.Core.Entities
{
    public class Order : Entity
    {
        //public Order()
        //{
        //    OrderDetails = new HashSet<OrderDetail>();
        //}

        public string ZipCode { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public decimal OrderTotal { get; set; }

        public DateTime OrderPlaced { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }

        public static Order Create(int orderId, string userId, string address, string city, string country, decimal orderTotal, DateTime orderPlaced, string zipCode)
        {
            var order = new Order()
            {
                Id = orderId,
                UserId = userId,
                Address = address,
                Country = country,
                City = city,
                OrderTotal = orderTotal,
                OrderPlaced = orderPlaced,
                ZipCode = zipCode
            };

            return order;
        }
    }
}
