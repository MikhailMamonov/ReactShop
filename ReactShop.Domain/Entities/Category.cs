using System.Collections.Generic;
using Newtonsoft.Json;
using ReactShop.Core.Entities.Base;

#nullable disable

namespace ReactShop.Core.Entities
{
    public class Category : Entity
    {
        [JsonIgnore]
        public virtual ICollection<Product> Products { get; set; }

        //public Category()
        //{
        //    Products = new HashSet<Product>();
        //}

        public string Name { get; set; }

        public static Category Create(int categoryId, string name)
        {
            var category = new Category()
            {
                Id = categoryId,
                Name = name
            };

            return category;
        }
    }
}
