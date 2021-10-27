using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using ReactShop.Core.Repositories;
using ReactShop.Core.Repositories.Base;
using ReactShop.Infrastructure.Repositories;
using ReactShop.Infrastructure.Repositories.Base;
using ReactShop.LoggerService;
using ReactShop.Services.Categories;
using ReactShop.Services.Orders;
using ReactShop.Services.Products;
using ReactShop.Services.RestService;
using ReactShop.Services.ShoppingCartService;
using ReactShop.Services.Users;

namespace ReactShop.Web.Extensions
{
    public static class ServicesExtension
    {
        public static void CustomServices(this IServiceCollection services) 
        {
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            services.AddScoped<IProductRepository,ProductRepository>();
            services.AddTransient(typeof(IRestService<>), typeof(RestService<,>));

            services.AddTransient(typeof(IUsersService), typeof(UsersService));
            services.AddTransient(typeof(IProductsService), typeof(ProductsService));   
            services.AddTransient(typeof(ICategoryService), typeof(CategoryService));
            services.AddTransient(typeof(IOrdersService), typeof(OrdersService));
            services.AddTransient(typeof(IShoppingCartService), typeof(ShoppingCartService));
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        public static void ConfigureMapper(this IServiceCollection services)
        {
            // Auto Mapper Configurations
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);
        }

        public static void ConfigureLoggerService(this IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
