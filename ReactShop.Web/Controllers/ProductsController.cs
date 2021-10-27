using System;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Application.Commands;
using ReactShop.Application.Queries;
using ReactShop.Core.DTOModels;

using ReactShop.Domain.Entities;
using ReactShop.LoggerService;

using ReactShop.Services.Products;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController :Controller
    //: BaseController<ProductDTO>
    {
        private readonly IMediator _mediator;

        public ProductsController(IProductsService productsService, IMapper mapper, ILoggerManager logger,
            IMediator mediator)
            //: base(productsService, mapper, logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _mediator.Send(new GetAllProductsQuery()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _mediator.Send(new GetProductByIdQuery { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
