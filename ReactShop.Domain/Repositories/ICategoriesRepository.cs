using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories.Base;

namespace ReactShop.Core.Repositories
{
    public interface ICategoriesRepository : IRepository<Category>
    {
        Task<Category> GetByIdAsync(int id);

        Task RemoveAsync(int id);
    }
}
