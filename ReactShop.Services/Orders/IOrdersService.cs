using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Orders
{
    public interface IOrdersService : IRestService<OrderDTO>
    {
        public Task<IEnumerable<OrderDTO>> GetByUserId(string userId);
        public Task<IEnumerable<OrderDTO>> GetUsersLastOrders(int count, string userId);
        public Task<IEnumerable<OrderDTO>> GetUserMostPopularProduct(string userId);

        public Task<IEnumerable<OrderDTO>> GetFilteredOrders(string userId = null, int offset = 0, int limit = 10,
            decimal? minimalPrice = 0, decimal? maximalPrice = null,
            DateTime? minDate = null,
            DateTime? maxDate = null,
            string zipCode = null);
    }
}