using AutoMapper;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;
using ReactShop.Core.Entities;
using ReactShop.Infrastructure.Data;

namespace ReactShop.Application.Services.Products
{
    public class ProductsService : RestService<Product, ProductModel>, IProductsService
    {
        protected ApplicationDbContext Db;
        protected readonly IMapper Mapper;
        public ProductsService(ApplicationDbContext db, IMapper mapper) : base(db, mapper)
        {
            Mapper = mapper;
        }

     
    }
}


