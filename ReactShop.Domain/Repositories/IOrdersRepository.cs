using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories.Base;

namespace ReactShop.Core.Repositories
{
    public interface IOrdersRepository : IRepository<Order>
    {
        Task<Order> GetByIdAsync(int id);

        Task RemoveAsync(int id);
    }
}
