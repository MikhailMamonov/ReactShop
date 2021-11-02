using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories.Base;

namespace ReactShop.Core.Repositories
{
    public interface IShoppingCartRepository : IRepository<CartItem>
    {
        Task<CartItem> GetByIdAsync(int id);

        Task RemoveAsync(int id);
    }
}
