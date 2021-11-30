using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;
using ReactShop.Core.Repositories.Base;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class ProductsRepository : EfRepository<Product>, IProductsRepository
    {
        public ProductsRepository(ApplicationDbContext context) : base(context)
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
        }

        public override async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await Context.Set<Product>()
                .Include(p => p.Category)
                //.Include(p => p.CartItems)
                //.Include(p => p.OrderDetails)
                .ToListAsync();
        }
    }
}
