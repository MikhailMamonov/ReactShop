using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using ReactShop.Application.Behaviours;

namespace ReactShop.Application
{
    public static class Dependencies
    {
        public static IServiceCollection RegisterRequestHandlers(
            this IServiceCollection services)
        {
            services
                .AddMediatR(typeof(Dependencies).Assembly);
            services.AddValidatorsFromAssembly(typeof(Dependencies).Assembly);
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            
            return services;

        }
    }
}
