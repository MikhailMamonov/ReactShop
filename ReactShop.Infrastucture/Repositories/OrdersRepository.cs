using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class OrdersRepository : EfRepository<Order>,IOrdersRepository
    {
        public OrdersRepository(ApplicationDbContext context) : base(context)
        {
        }
        
        public async Task<Order> GetByIdAsync(int id)
        {
            return await Context.Set<Order>().FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            var entity = await Context.Set<Order>().FindAsync(id);
            Context.Set<Order>().Remove(entity);
            //await Context.SaveChangesAsync();

        }

        
    }
}
