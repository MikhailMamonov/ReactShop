using AutoMapper;

using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // ApplicationUser
        CreateMap<UserDTO, ApplicationUser>();
        CreateMap<ApplicationUser, UserDTO>();

        //Product
        CreateMap<ProductDTO, Product>();
        CreateMap<Product, ProductDTO>();

        //Category
        CreateMap<CategoryDTO, Category>();
        CreateMap<Category, CategoryDTO>();

    }
}