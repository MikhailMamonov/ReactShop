using AutoMapper;

using MediatR;

using Microsoft.AspNetCore.Mvc;
using ReactShop.LoggerService;
using System;
using System.Threading.Tasks;
using ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart;
using ReactShop.Application.Features.ShoppingCarts.GetAllShoppingCarts;
using ReactShop.Application.Features.ShoppingCarts.GetShoppingCartById;
using ReactShop.Application.Services.ShoppingCart;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingCartController : Controller
    {
        private readonly IMediator _mediator;

        public ShoppingCartController(IMapper mapper, ILoggerManager logger,
                IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _mediator.Send(new GetAllShoppingCartsQuery()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _mediator.Send(new GetShoppingCartsByIdQuery() { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateShoppingCartCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
