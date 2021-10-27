using System.Collections.Generic;

#nullable disable

namespace ReactShop.Domain.Entities
{
    public class Product
    {
        public Product()
        {
            CartItems = new HashSet<CartItem>();
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }


        public virtual Category Category { get; set; }
        public ICollection<CartItem> CartItems { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
