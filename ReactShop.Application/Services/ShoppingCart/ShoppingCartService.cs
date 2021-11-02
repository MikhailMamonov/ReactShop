using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;
using ReactShop.Core.Entities;
using ReactShop.Infrastructure.Data;

namespace ReactShop.Application.Services.ShoppingCart
{
    public class ShoppingCartService : RestService<CartItem, CartItemModel>,IShoppingCartService
    {
        protected ApplicationDbContext Db;
        protected readonly IMapper Mapper;
        public Core.Entities.ShoppingCart CurrentShoppingCart { get; }

        private readonly IHttpContextAccessor _httpContextAccessor;

        public ShoppingCartService(ApplicationDbContext db, IMapper mapper, UserManager<ApplicationUser> userManager, IHttpContextAccessor httpContextAccessor) : base(db, mapper)
        {
            Mapper = mapper;
            CurrentShoppingCart = GetCurrentShoppingCartAsync();
            _httpContextAccessor = httpContextAccessor;
            Db = db;
        }

        public async Task ClearShoppingCart()
        {
            Db.RemoveRange(CurrentShoppingCart.CartItems);
            await Db.SaveChangesAsync();
        }


        public async Task<decimal> CalculateSum()
        {
            decimal summary = 0;
            CurrentShoppingCart.CartItems.ToList().ForEach(ci => summary+= ci.Amount * ci.InStock);
            return summary;
        }

        public async Task<decimal> ApplySalary(string promocode) 
        {
            throw new NotImplementedException();
        }
        public async Task Submit() 
        {
            throw new NotImplementedException();
        }

        private Core.Entities.ShoppingCart GetCurrentShoppingCartAsync()
        {
            var userId = _httpContextAccessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var user = Db.Users.Find(userId);
            return user?.ShoppingCart;
        }

    }
}
