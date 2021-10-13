using AutoMapper;

using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;

using System;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // ApplicationUser
        CreateMap<UserDTO, ApplicationUser>();
        CreateMap<ApplicationUser, UserDTO>();

        //Product
        CreateMap<ProductDTO, Product>();//.ForMember(dto => dto.Image, opt => opt.MapFrom(c => Convert.FromBase64String(c.Image)));
        CreateMap<Product, ProductDTO>();//ForMember(dto => dto.Image, opt => opt.MapFrom(c => Convert.ToBase64String(c.Image)));

        //Category
        CreateMap<CategoryDTO, Category>();
        CreateMap<Category, CategoryDTO>();



    }
}