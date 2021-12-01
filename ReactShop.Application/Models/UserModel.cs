using ReactShop.Application.Models.Base;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Models
{
    public class UserModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public ShoppingCartModel ShoppingCart { get; set; }
    }
}
