using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;

using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Services.Interfaces
{
    public interface IOrderService: IRestService<Order, OrderDTO>
    {
        //IEnumerable<OrderDTO> GetByUserId(string userId);
        //IEnumerable<OrderDTO> GetUsersLastestOrders(int count, string userId);
        //IEnumerable<OrderDTO> GetUserMostPopularProduct(string userId);
        //IEnumerable<OrderDTO> GetFilteredOrders(string userId = null, int offset = 0, int limit = 10, decimal? minimalPrice = 0, decimal? maximalPrice = null,
        //    DateTime? minDate = null,
        //    DateTime? maxDate = null,
        //    string zipCode = null);
    }
}
