using System;
using System.Collections.Generic;

#nullable disable

namespace ReactShop.Domain.Entities
{
    public partial class CartItem
    {
        public string Id { get; set; }
        public string CartId { get; set; }
        public decimal Amount { get; set; }
        public DateTime DateCreated { get; set; }
        public int? ProductId { get; set; }

        public virtual Product Product { get; set; }
    }
}
