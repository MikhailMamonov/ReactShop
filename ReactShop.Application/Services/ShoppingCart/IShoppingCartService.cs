using System.Threading.Tasks;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;

namespace ReactShop.Application.Services.ShoppingCart
{
    public interface IShoppingCartService : IRestService<CartItemModel>
    {
        Task ClearShoppingCart();
        Task<decimal> CalculateSum();
        Task<decimal> ApplySalary(string promoСode);
        Task Submit();
    }
}
