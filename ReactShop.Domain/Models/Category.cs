using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Domain.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<Product> Products { get; set; }
    }
}
