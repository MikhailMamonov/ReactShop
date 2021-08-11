using AutoMapper;

using Microsoft.Extensions.DependencyInjection;
using ReactShop.LoggerService;
using ReactShop.Services.Implementations;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Web.Extensions
{
    public static class ServicesExtension
    {
        public static void ConfigureCustomServices(this IServiceCollection services) 
        {
            services.AddTransient<IUsersService, UsersService>();
            services.AddTransient<IProductsService, ProductsService>();                     
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
