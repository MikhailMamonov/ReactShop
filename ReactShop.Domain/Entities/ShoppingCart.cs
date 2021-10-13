using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Domain.Entities
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public virtual ICollection<CartItem> CartItems { get; set; }
    }
}
