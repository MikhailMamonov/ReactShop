using System.Collections.Generic;

#nullable disable

namespace ReactShop.Domain.Entities
{
    public class Category
    {
        public ICollection<Product> Products { get; set; }

        public Category()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        
    }
}
