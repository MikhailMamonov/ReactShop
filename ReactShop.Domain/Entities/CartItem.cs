using System;
using ReactShop.Core.Entities.Base;

namespace ReactShop.Core.Entities
{
    public class CartItem : Entity
    {
        public decimal Amount { get; set; }
        public int InStock { get; set; }
        public DateTime DateCreated { get; set; }
        public int? ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int? ShoppingCartId { get; set; }
        public virtual ShoppingCart ShoppingCart { get; set; }

        public static CartItem Create(int cartItemId,decimal amount, int inStock, DateTime dateCreated, int? productId)
        {
            var cartItem = new CartItem()
            {
                Id = cartItemId,
                Amount = amount,
                InStock = inStock, 
                DateCreated = dateCreated, 
                ProductId = productId
            };

            return cartItem;
        }
    }
}
