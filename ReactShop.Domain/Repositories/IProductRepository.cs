using System.Threading.Tasks;
using ReactShop.Core.Repositories.Base;
using ReactShop.Domain.Entities;

namespace ReactShop.Core.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        Task ClearProducts();

        Task<Product> GetByIdAsync(int id);

        Task RemoveAsync(int id);
    }
}
