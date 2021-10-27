using AutoMapper;

using System;
using System.Collections.Generic;
using System.Text;
using ReactShop.Application.Commands;
using ReactShop.Application.Responses;
using ReactShop.Domain.Entities;

namespace ReactShop.Application.Mappers
{
    public class ProductMappingProfile : Profile
    {
        public ProductMappingProfile()
        {
            CreateMap<Product, ProductResponse>().ReverseMap();
            CreateMap<Product, CreateProductCommand>().ReverseMap();
            CreateMap<Product, UpdateProductCommand>().ReverseMap();
        }
    }
}
