using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;

namespace ReactShop.Application.Services.Products
{
    public interface IProductsService :IRestService<ProductModel>
    {
    }
}
