using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;

namespace ReactShop.Application.Services.Order
{
    public interface IOrdersService : IRestService<OrderModel>
    {
        public Task<IEnumerable<OrderModel>> GetByUserId(string userId);
        public Task<IEnumerable<OrderModel>> GetUsersLastOrders(int count, string userId);
        public Task<IEnumerable<OrderModel>> GetUserMostPopularProduct(string userId);

        public Task<IEnumerable<OrderModel>> GetFilteredOrders(string userId = null, int offset = 0, int limit = 10,
            decimal? minimalPrice = 0, decimal? maximalPrice = null,
            DateTime? minDate = null,
            DateTime? maxDate = null,
            string zipCode = null);
    }
}