using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Application.Features.CartItems.CreateCartItem;
using ReactShop.Application.Features.CartItems.GetAllCartItems;
using ReactShop.Application.Features.CartItems.GetCartItemById;
using ReactShop.LoggerService;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartItemsController : Controller
    {
        private readonly IMediator _mediator;

        public CartItemsController(IMapper mapper, ILoggerManager logger,
            IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                return Ok(await _mediator.Send(new GetAllCartItemsQuery()));
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _mediator.Send(new GetCartItemByIdQuery() { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateCartItemCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
