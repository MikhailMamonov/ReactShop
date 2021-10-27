using AutoMapper;
using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Infrastructure.Data;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Categories
{
    public class CategoryService : RestService<Category,CategoryDTO>, ICategoryService
    {
        public CategoryService(ApplicationDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

    }
}
