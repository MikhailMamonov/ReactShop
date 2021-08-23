using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Domain.DTOModels;
using ReactShop.LoggerService;
using ReactShop.Services.Interfaces;

namespace ReactShop.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : BaseController<CategoryDTO>
    {
        public CategoriesController(IDatabaseService<CategoryDTO> categoriesService, IMapper mapper, ILoggerManager logger)
            : base(categoriesService, mapper, logger)
        {
        }
    }
}
