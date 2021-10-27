using System.Threading.Tasks;
using ReactShop.Core.Repositories;
using ReactShop.Core.Repositories.Base;
using ReactShop.Domain.Entities;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Infrastructure.Repositories
{
    public class ShoppingCartRepository : EfRepository<CartItem>,IShoppingCartRepository
    {
        ShoppingCartRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task ClearShoppingCart()
        {
            Context.RemoveRange();
            await Context.SaveChangesAsync();
        }
    }
}
