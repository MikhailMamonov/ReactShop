using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.LoggerService;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductsService _productsService;
        private readonly IMapper _mapper;
        private ILoggerManager _logger;
        public ProductsController(IProductsService productsService, IMapper mapper, ILoggerManager logger)
        {
            _productsService = productsService;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product productRequest)
        {
            try
            {
                if (productRequest == null)
                {
                    return LogErrorAndReturnStatusCode("Product Object is null", 400);
                }

                if (!ModelState.IsValid)
                {
                    return LogErrorAndReturnStatusCode("Model is invalid", 400);
                }

                

                var errorMessage = 
                    await _productsService.AddProductAsync(productRequest);

                if (errorMessage == null)
                {
                    _logger.LogInfo($"\nProduct Object added ${productRequest}");
                    return Ok(new { product = productRequest });
                }
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($"{e.InnerException} -> {e.StackTrace}", 500);
            }

        }
        [HttpPost("Category")]
        public async Task<IActionResult> AddCategory([FromBody] Category categoryRequest)
        {
            try
            {
                if(categoryRequest==null)
                    return LogErrorAndReturnStatusCode("Category Object is null", 400);

                if (!ModelState.IsValid)
                    return LogErrorAndReturnStatusCode("Model is invalid", 400);

                var errorMessage =  
                    await _productsService.AddCategoryAsync(categoryRequest);

                if (errorMessage == null)
                {
                    _logger.LogInfo($"\nCategory Object added ${categoryRequest}");
                    return Ok(new { category = categoryRequest });
                }
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }

            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($"{e.InnerException} -> {e.StackTrace}", 500);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            try
            {
                var products = await _productsService.GetProductsAsync();
                
                return Ok(new { products = products });
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.InnerException} " +
                    $"-> {e.StackTrace}", 500);
            }
            
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories()
        {
            try
            {
                var categories = await _productsService.GetCategoriesAsync();
                 return Ok(new { categories });
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.InnerException} " +
                    $"-> {e.StackTrace}", 500);
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
        public async Task<IActionResult> UpdateCategory(int id, [FromBody] CategoryDTO categoryRequest)
        {
            var categoryEntity = _mapper.Map<Category>(categoryRequest);
            await _productsService.UpdateCategoryAsync(id, categoryEntity);
            return Ok(categoryRequest);
        }

        [HttpDelete("Category/{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            try
            {
                var errorMessage = await _productsService.DeleteCategoryAsync(id);

                if (string.IsNullOrEmpty(errorMessage))
                    return Ok(
                        new { id = id, message = string.Format("category with id -> {0} succes deleted", id) });
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.Message} ->" +
                    $" {e.StackTrace}", 500);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                var errorMessage = await _productsService.DeleteProductAsync(id);

                if (string.IsNullOrEmpty(errorMessage))
                    return Ok(
                        new { id = id, message = string.Format("product with id -> {0} succes deleted", id) });
                else
                {
                    return LogErrorAndReturnStatusCode(errorMessage, 500);
                }
            }
            catch (Exception e)
            {
                return LogErrorAndReturnStatusCode($" {e.InnerException} ->" +
                    $" {e.StackTrace}", 500);
            }
            
        }

        private IActionResult LogErrorAndReturnStatusCode(string errMessage, int statusCode)
        {
            _logger.LogError(errMessage);
            return StatusCode(statusCode, errMessage);
        }
    }
}
