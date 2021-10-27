using System;
using System.Collections.Generic;

#nullable disable

namespace ReactShop.Domain.Entities
{
    public class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }

        public string ZipCode { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public decimal OrderTotal { get; set; }

        public DateTime OrderPlaced { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
