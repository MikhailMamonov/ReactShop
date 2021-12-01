using System;
using AutoMapper;

using MediatR;

using Microsoft.AspNetCore.Mvc;

using ReactShop.LoggerService;

using System.Threading.Tasks;
using ReactShop.Application.Features.Orders.CreateOrder;
using ReactShop.Application.Features.Users.GetAllUsers;
using ReactShop.Application.Features.Users.GetUserById;
using ReactShop.Application.Queries.Orders;

namespace ReactShop.Web.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class UsersController : Controller
    //BaseController<UserModel>
{
    private readonly IMediator _mediator;

    public UsersController(IMediator mediator)
        //: base(productsService, mapper, logger)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _mediator.Send(new GetAllUsersQuery()));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        return Ok(await _mediator.Send(new GetUserByIdQuery() { Id = id }));
    }

    [HttpPost]
    public async Task<IActionResult> CreateProduct([FromBody] CreateOrderCommand command)
    {
        return Ok(await _mediator.Send(command));
    }

    }
}
