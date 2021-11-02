using AutoMapper;
using ReactShop.Application.Features.Products.CreateProduct;
using ReactShop.Application.Features.Products.UpdateProduct;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Mappers.Products
{
    public class ProductMappingProfile : Profile
    {
        public ProductMappingProfile()
        {
            CreateMap<Product, ProductModel>().ReverseMap();
            CreateMap<Product, CreateProductCommand>().ReverseMap();
            CreateMap<Product, UpdateProductCommand>().ReverseMap();
        }
    }
}
