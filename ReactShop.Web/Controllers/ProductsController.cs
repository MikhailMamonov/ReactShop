using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;

using ReactShop.Services;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductsService _productsService;
        private readonly IMapper _mapper;
        public ProductsController(IProductsService productsService, IMapper mapper) 
        {
            _productsService = productsService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromForm] ProductDTO productRequest)
        {
            var productEntity = new Product() 
            { 
                Name = productRequest.Name,
                Price = productRequest.Price
            };
            await _productsService.AddProductAsync(productEntity);
            var productResponse = _mapper.Map<ProductDTO>(productEntity);
            return Ok(productResponse);
        }
        [HttpPost("Category")]
        public async  Task<IActionResult> AddCategory([FromForm] CategoryDTO categoryRequest)
        {
            var categoryEntity = new Category
            { 
                Name = categoryRequest.Name
            };

            await _productsService.AddCategoryAsync(categoryEntity);
            var categoryResponse = _mapper.Map<CategoryDTO>(categoryEntity);
            return Ok(categoryResponse);
        }

        [HttpGet]
        public async  Task<IActionResult> Products() {
            var products =await _productsService.GetProductsAsync();
            var productsResponse = _mapper.Map<List<ProductDTO>>(products);
            return Ok(productsResponse);
        }

        [HttpGet("categories")]
        public async  Task<IActionResult> Categories()
        {
            try
            {
                var categories = await _productsService.GetCategoriesAsync();
                var categoriesResponse = _mapper.Map<List<CategoryDTO>>(categories);
                return Ok(categoriesResponse);
            }
            catch (Exception)
            {

                throw;
                
            }
            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] ProductDTO productRequest)
        {
            var productEntity = _mapper.Map<Product>(productRequest);
            await _productsService.UpdateProductAsync(id, productEntity);

            return Ok(productRequest);
        }

        [HttpPut("Category/{id}")]
        public async  Task<IActionResult> UpdateCategory(int id, [FromBody] CategoryDTO categoryRequest) 
        {
            var categoryEntity = _mapper.Map<Category>(categoryRequest);
            await _productsService.UpdateCategoryAsync(id, categoryEntity);
            return Ok(categoryRequest);
        }

        [HttpDelete("Category/{id}")]
        public async  Task<IActionResult> DeleteCategory(int id) 
        {
            var categories =await _productsService.GetCategoriesAsync();
            if (!categories.Any(category => category.Id == id)) 
            {
                return BadRequest("Category id not found");
            }
            await _productsService.DeleteCategoryAsync(id);
            return Ok(id);
        }

        [HttpDelete("{id}")]
        public async  Task<IActionResult> DeleteProduct(int id)
        {
            var products =await _productsService.GetProductsAsync();
            if (!products.Any(product => product.Id == id))
            {
                return BadRequest("Product id not found");
            }

            await _productsService.DeleteProductAsync(id);
            return Ok(id); 
        }
    }
}
