using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Infrastructure.Data;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Orders
{
    public class OrdersService : RestService<Order, OrderDTO>, IOrdersService
    {
        protected ApplicationDbContext Db;
        protected readonly IMapper Mapper;
        public OrdersService(ApplicationDbContext context, IMapper mapper) : base(context, mapper)
        {
            Mapper = mapper;
        }

        /// <summary>
        /// создать
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async override Task<OrderDTO> Add(OrderDTO model)
        {
            //model.OrderPlaced = DateTime.Now;
            throw new NotImplementedException();
        }

            public async Task<IEnumerable<OrderDTO>> GetByUserId(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<OrderDTO>> GetUsersLastOrders(int count, string userId)
        {
            throw new NotImplementedException();
        }
        public async Task<IEnumerable<OrderDTO>> GetUserMostPopularProduct(string userId)
        {
            throw new NotImplementedException();
        }
        public async Task<IEnumerable<OrderDTO>> GetFilteredOrders(string userId = null, int offset = 0, int limit = 10, decimal? minimalPrice = 0, decimal? maximalPrice = null,
                    DateTime? minDate = null,
                    DateTime? maxDate = null,
                    string zipCode = null)
        {
            throw new NotImplementedException();
        }
    }
}
