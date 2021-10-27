using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Domain.DTOModels
{
    public class CartItemDto
    {
        public int Id { get; set; }
        public int CartId { get; set; }
        public decimal Amount { get; set; }
        public DateTime DateCreated { get; set; }
        public int? ProductId { get; set; }
    }
}
