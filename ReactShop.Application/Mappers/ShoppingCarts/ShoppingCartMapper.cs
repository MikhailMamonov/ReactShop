﻿using System;
using AutoMapper;

namespace ReactShop.Application.Mappers.ShoppingCarts
{
    public class ShoppingCartMapper
    {
        private static readonly Lazy<IMapper> Lazy = new Lazy<IMapper>(() => {
            var config = new MapperConfiguration(cfg => {
                cfg.ShouldMapProperty = p => p.GetMethod.IsPublic || p.GetMethod.IsAssembly;
                cfg.AddProfile<ShoppingCartMappingProfile>();
            });
            var mapper = config.CreateMapper();
            return mapper;
        });
        public static IMapper Mapper => Lazy.Value;
    }
}
