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

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : BaseController<Product,ProductDTO>
    {

        public ProductsController(IProductsService productsService, IMapper mapper, ILoggerManager logger)
            : base(productsService, mapper, logger) { }

       
    }
}
