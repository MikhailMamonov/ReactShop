using System;

#nullable disable

namespace ReactShop.Domain.Entities
{
    public class CartItem
    {
        public int Id { get; set; }
        public int CartId { get; set; }
        public decimal Amount { get; set; }
        public int InStock { get; set; }
        public DateTime DateCreated { get; set; }
        public int? ProductId { get; set; }
        public virtual Product Product { get; set; }
        public virtual ShoppingCart ShoppingCart { get; set; }
    }
}
