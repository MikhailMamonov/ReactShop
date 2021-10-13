using AutoMapper;

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
    public class OrdersController : BaseController<Order, OrderDTO>
    {

        public OrdersController(IOrdersService ordersService, IMapper mapper, ILoggerManager logger) : base(ordersService, mapper,logger) { }


    }
}
