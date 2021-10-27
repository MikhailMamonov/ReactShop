using System.Collections.Generic;

namespace ReactShop.Domain.Entities
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public ICollection<CartItem> CartItems { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

        
    }
}
