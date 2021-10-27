using System.Threading.Tasks;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.RestService;

namespace ReactShop.Services.ShoppingCartService
{
    public interface IShoppingCartService : IRestService<CartItemDto>
    {
        Task ClearShoppingCart();
        Task<decimal> CalculateSum();
        Task<decimal> ApplySalary(string promoСode);
        Task Submit();
    }
}
