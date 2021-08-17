using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class ProductsService : IProductsService
    {
        private ApplicationDbContext _db;

        public ProductsService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<List<Product>> GetProductsAsync()
        {
            return await _db.Products.ToListAsync();
        }
        public async Task<string> AddProductAsync(Product product)
        {
            await _db.Products.AddAsync(product);
            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "products not added";
        }

        public async Task<string> AddCategoryAsync(Category category)
        {
            await _db.Categories.AddAsync(category);
            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "category not added";

        }

        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await _db.Categories.ToListAsync();
        }

        public async Task<string> UpdateProductAsync(int id, Product product)
        {
            return "";
        }
        public async Task<string> UpdateCategoryAsync(int id, Category category)
        {
            return "";
        }
        public async Task<string> DeleteCategoryAsync(int id)
        {
            var category = await _db.Categories.FindAsync(id);

            if (category == null)
                return $"Category with id {id} not found";

            _db.Categories.Remove(category);
            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "category not remove";

        }
        public async Task<string> DeleteProductAsync(int id)
        {
            var product = await _db.Products.FindAsync(id);

            if (product == null)
                return $"Product with id {id} not found";
            _db.Products.Remove(product);

            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "category not remove";
        }
    }
}


