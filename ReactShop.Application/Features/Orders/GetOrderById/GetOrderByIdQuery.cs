using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Queries.Orders
{
    public class GetOrderByIdQuery : IRequest<Order>
    {
        public int Id { get; set; }
    }
}
