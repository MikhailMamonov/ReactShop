using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories.Base;

namespace ReactShop.Core.Repositories
{
    public interface IProductsRepository : IRepository<Product>
    {
        Task<Product> GetByIdAsync(int id);

        Task RemoveAsync(int id);
    }
}
