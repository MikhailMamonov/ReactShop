using System;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Application.Features.Categories.CreateCategory;
using ReactShop.Application.Features.Categories.DeleteCategoryById;
using ReactShop.Application.Features.Categories.GetAllCategories;
using ReactShop.Application.Features.Categories.GetCategoryById;
using ReactShop.Application.Features.Products.CreateProduct;
using ReactShop.Application.Queries;
using ReactShop.Application.Services.Products;
using ReactShop.LoggerService;


namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : Controller
        //: BaseController<CategoryModel>
    {

        private readonly IMediator _mediator;

        public CategoriesController(IProductsService productsService, IMapper mapper, ILoggerManager logger,
                IMediator mediator)
            //: base(productsService, mapper, logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _mediator.Send(new GetAllCategoriesQuery()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _mediator.Send(new GetCategoryByIdQuery() { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateCategoryCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Remove(int id)
        {
            var command = new DeleteCategoryByIdCommand
            {
                Id = id
            };
            return Ok(await _mediator.Send(command));
        }
    }
}
