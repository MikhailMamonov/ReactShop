using System.Threading.Tasks;
using ReactShop.Core.Repositories;
using ReactShop.Core.Repositories.Base;
using ReactShop.Domain.Entities;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class ProductRepository : EfRepository<Product>,IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context)
        {
        }
        
        public async Task<Product> GetByIdAsync(int id)
        {
            return await Context.Set<Product>().FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            var entity = await Context.Set<Product>().FindAsync(id);
            Context.Set<Product>().Remove(entity);
            //await Context.SaveChangesAsync();

        }

        public async Task ClearProducts()
        {
            Context.RemoveRange();
                //await Context.SaveChangesAsync();
        }
    }
}
