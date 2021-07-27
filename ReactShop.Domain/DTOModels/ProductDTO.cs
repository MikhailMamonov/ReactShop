using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Domain.DTOModels
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
    }
}
