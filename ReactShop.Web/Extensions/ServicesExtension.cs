using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using ReactShop.Application.Services.Category;
using ReactShop.Application.Services.Order;
using ReactShop.Application.Services.Products;
using ReactShop.Application.Services.Rest;
using ReactShop.Application.Services.ShoppingCart;
using ReactShop.Application.Services.Users;
using ReactShop.Core.Repositories;
using ReactShop.Core.Repositories.Base;
using ReactShop.Infrastructure.Repositories;
using ReactShop.Infrastructure.Repositories.Base;
using ReactShop.LoggerService;


namespace ReactShop.Web.Extensions
{
    public static class ServicesExtension
    {
        public static void CustomServices(this IServiceCollection services) 
        {
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            services.AddScoped<IProductsRepository,ProductsRepository>();
            services.AddScoped<ICategoriesRepository, CategoriesRepository>();
            services.AddScoped<IOrdersRepository, OrdersRepository>();
            services.AddScoped<IUsersRepository, UsersRepository>();
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
