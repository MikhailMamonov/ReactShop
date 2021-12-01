using AutoMapper;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;
using ReactShop.Infrastructure.Data;

namespace ReactShop.Application.Services.Category
{
    public class CategoryService : RestService<Core.Entities.Category,CategoryModel>, ICategoryService
    {
        public CategoryService(ApplicationDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

    }
}
