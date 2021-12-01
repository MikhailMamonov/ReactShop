using System;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Application.Features.Orders.CreateOrder;
using ReactShop.Application.Features.Orders.GetAllOrders;
using ReactShop.Application.Queries.Orders;


namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : Controller
        //: BaseController<CategoryModel>
    {

        private readonly IMediator _mediator;

        public OrdersController(IMediator mediator)
            //: base(productsService, mapper, logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _mediator.Send(new GetAllOrdersQuery()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _mediator.Send(new GetOrderByIdQuery() { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateOrderCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}

