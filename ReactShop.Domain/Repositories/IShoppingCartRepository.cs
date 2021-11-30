using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories.Base;

namespace ReactShop.Core.Repositories
{
    public interface IShoppingCartRepository : IRepository<ShoppingCart>
    {
        Task<CartItem> GetByIdAsync(int id);

        Task RemoveAsync(int id);
    }
}
