using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.LoggerService;
using ReactShop.Services.Interfaces;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : BaseController<Category,CategoryDTO>
    {
        public CategoriesController(ICategoryService categoriesService, IMapper mapper, ILoggerManager logger)
            : base(categoriesService, mapper, logger)
        {
        }
    }
}
