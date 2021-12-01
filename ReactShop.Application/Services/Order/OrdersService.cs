using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;
using ReactShop.Infrastructure.Data;

namespace ReactShop.Application.Services.Order
{
    public class OrdersService : RestService<Core.Entities.Order, OrderModel>, IOrdersService
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
        public async override Task<OrderModel> Add(OrderModel model)
        {
            //model.OrderPlaced = DateTime.Now;
            throw new NotImplementedException();
        }

            public async Task<IEnumerable<OrderModel>> GetByUserId(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<OrderModel>> GetUsersLastOrders(int count, string userId)
        {
            throw new NotImplementedException();
        }
        public async Task<IEnumerable<OrderModel>> GetUserMostPopularProduct(string userId)
        {
            throw new NotImplementedException();
        }
        public async Task<IEnumerable<OrderModel>> GetFilteredOrders(string userId = null, int offset = 0, int limit = 10, decimal? minimalPrice = 0, decimal? maximalPrice = null,
                    DateTime? minDate = null,
                    DateTime? maxDate = null,
                    string zipCode = null)
        {
            throw new NotImplementedException();
        }
    }
}
