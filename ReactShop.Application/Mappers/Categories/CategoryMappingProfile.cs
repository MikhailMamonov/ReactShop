using AutoMapper;
using ReactShop.Application.Features.Categories.CreateCategory;
using ReactShop.Application.Features.Categories.UpdateCategory;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Mappers.Categories
{
    public class CategoryMappingProfile : Profile
    {
        public CategoryMappingProfile()
        {
            CreateMap<Category, CategoryModel>().ReverseMap();
            CreateMap<Category, CreateCategoryCommand>().ReverseMap();
            CreateMap<Category, UpdateCategoryCommand>().ReverseMap();
        }
    }
}
