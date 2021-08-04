using ReactShop.Domain.Entities;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public interface IProductsService
    {
        public Task<List<Product>> GetProductsAsync();
        public Task<bool> AddProductAsync(Product product);
        public Task<bool> AddCategoryAsync(Category category);
        public Task<List<Category>> GetCategoriesAsync();
        public Task<bool> UpdateProductAsync(int id, Product product);
        public Task<bool> UpdateCategoryAsync(int id, Category category);
        public Task<bool> DeleteCategoryAsync(int id);
        public Task<bool> DeleteProductAsync(int id);
    }
}
