using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class CartItemRepository : EfRepository<CartItem>, ICartItemRepository
    {
        public CartItemRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<CartItem> GetByIdAsync(int id)
        {
            return await Context.Set<CartItem>().FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            var entity = await Context.Set<Product>().FindAsync(id);
            Context.Set<Product>().Remove(entity);
        }


    }
}
