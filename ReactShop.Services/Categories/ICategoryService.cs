using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Categories
{
    public interface ICategoryService : IRestService<CategoryDTO>
    {
    }
}
