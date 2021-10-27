using System.Threading.Tasks;
using ReactShop.Core.Repositories.Base;
using ReactShop.Domain.Entities;

namespace ReactShop.Core.Repositories
{
    public interface IShoppingCartRepository : IRepository<CartItem>
    {
        Task ClearShoppingCart();
    }
}
