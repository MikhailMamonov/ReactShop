using System;
using ReactShop.Application.Models.Base;

namespace ReactShop.Application.Models
{
    public class CartItemModel : BaseModel
    {
        public int CartId { get; set; }
        public decimal Amount { get; set; }
        public DateTime DateCreated { get; set; }
        public int? ProductId { get; set; }
    }
}
