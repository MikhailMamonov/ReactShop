using ReactShop.Core.DTOModels;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Products
{
    public interface IProductsService :IRestService<ProductDTO>
    {
    }
}
