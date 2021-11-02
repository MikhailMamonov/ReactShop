using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;
using ReactShop.Core.Repositories.Base;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Exceptions;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class CategoriesRepository : EfRepository<Category>,ICategoriesRepository
    {
        public CategoriesRepository(ApplicationDbContext context) : base(context)
        {
        }
        
        public async Task<Category> GetByIdAsync(int id)
        {
            return await Context.Set<Category>().FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            var entity = await Context.Set<Category>().FindAsync(id);
            if (entity==null)
            {
                throw new NotFoundException($"entity Category with id {id} not found.");
            }

            Context.Set<Category>().Remove(entity);
            //await Context.SaveChangesAsync();

        }

        
    }
}
