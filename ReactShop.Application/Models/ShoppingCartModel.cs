using ReactShop.Application.Models.Base;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Application.Models
{
    public class ShoppingCartModel : BaseModel
    {
        public string UserId { get; set; }
        //public ICollection<CartItemModel> CartItems { get; set; }
    }
}
