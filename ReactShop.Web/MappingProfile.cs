using AutoMapper;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Web
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // ApplicationUser
            CreateMap<UserModel, ApplicationUser>();
            CreateMap<ApplicationUser, UserModel>();

            //Product
            CreateMap<ProductModel, Product>();//.ForMember(dto => dto.Image, opt => opt.MapFrom(c => Convert.FromBase64String(c.Image)));
            CreateMap<Product, ProductModel>();//ForMember(dto => dto.Image, opt => opt.MapFrom(c => Convert.ToBase64String(c.Image)));

            //Category
            CreateMap<CategoryModel, Category>();
            CreateMap<Category, CategoryModel>();



        }
    }
}