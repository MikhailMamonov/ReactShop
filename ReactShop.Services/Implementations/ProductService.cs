using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.Entities;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    namespace ReactShop.Services
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
            public async Task<bool> AddProductAsync(Product product)
            {
                try {
                    await _db.Products.AddAsync(product);
                    return true;
                }
                catch (Exception e) 
                {
                    return false;
                }
                
            }
            public async Task<bool> AddCategoryAsync(Category category)
            {
                try
                {
                    await _db.Categories.AddAsync(category);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
            public async Task<List<Category>> GetCategoriesAsync()
            {
                return await _db.Categories.ToListAsync();
            }
            public async Task<bool> UpdateProductAsync(int id, Product product)
            {
                return true;
            }
            public async Task<bool> UpdateCategoryAsync(int id, Category category) 
            {
                return true;
            }
            public async Task<bool> DeleteCategoryAsync(int id) 
            {
                try
                {
                    var category = await _db.Categories.FindAsync(id);
                    _db.Categories.Remove(category);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
            public async Task<bool> DeleteProductAsync(int id) 
            {
                try
                {
                    var product = await _db.Products.FindAsync(id);
                    await _db.Products.AddAsync(product);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
