using System.Collections.Generic;
using ReactShop.Core.Entities.Base;

namespace ReactShop.Core.Entities
{
    public class ShoppingCart : Entity
    {
        public virtual ICollection<CartItem> CartItems { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }


        public static ShoppingCart Create(string userId, decimal? unitPrice = null, short? unitsInStock = null)
        {
            var product = new ShoppingCart()
            {
                UserId = userId,
            };
            return product;
        }
    }
}
