using System.Collections.Generic;
using ReactShop.Core.Entities.Base;

#nullable disable

namespace ReactShop.Core.Entities
{
    public class Product :Entity
    {
        public Product()
        {
            CartItems = new HashSet<CartItem>();
            OrderDetails = new HashSet<OrderDetail>();
        }

        public string Name { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public string Image { get; set; }
        public short? UnitsInStock { get; set; }


        public virtual Category Category { get; set; }
        public ICollection<CartItem> CartItems { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }

        public static Product Create(int productId, int categoryId, string name, decimal? unitPrice = null, short? unitsInStock = null)
        {
            var product = new Product
            {
                Id = productId,
                CategoryId = categoryId,
                Name = name,
                Price = unitPrice,
                UnitsInStock = unitsInStock,
            };
            return product;
        }
    }
}
