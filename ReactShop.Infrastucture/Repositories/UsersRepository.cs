using System.Threading.Tasks;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class UsersRepository : EfRepository<ApplicationUser>,IUsersRepository
    {
        public UsersRepository(ApplicationDbContext context) : base(context)
        {
        }
        
        public async Task<ApplicationUser> GetByIdAsync(string id)
        {
            return await Context.Set<ApplicationUser>().FindAsync(id);
        }

        public async Task RemoveAsync(string id)
        {
            var entity = await Context.Set<ApplicationUser>().FindAsync(id);
            Context.Set<ApplicationUser>().Remove(entity);
            

        }

        
    }
}
