using System.Collections.Generic;
using ReactShop.Core.Entities.Base;

namespace ReactShop.Core.Entities
{
    public class ShoppingCart : Entity
    {
        public ICollection<CartItem> CartItems { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }


        public static ShoppingCart Create(int cartId, string userId, string name, decimal? unitPrice = null, short? unitsInStock = null)
        {
            var product = new ShoppingCart()
            {
                Id = cartId,
                UserId = userId,
            };
            return product;
        }
    }
}
