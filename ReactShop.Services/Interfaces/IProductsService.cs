using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public interface IProductsService :IRestService<Product, ProductDTO>
    {
        //public Task<List<Product>> GetProductsAsync();
        //public Task<string> AddProductAsync(Product product);
        //public Task<string> AddCategoryAsync(Category category);
        //public Task<List<Category>> GetCategoriesAsync();
        //public Task<string> UpdateProductAsync(int id, Product product);
        //public Task<string> UpdateCategoryAsync(int id, Category category);
        //public Task<string> DeleteCategoryAsync(int id);
        //public Task<string> DeleteProductAsync(int id);
    }
}
