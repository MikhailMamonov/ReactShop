using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Queries.Orders;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Handlers.Orders
{
    public class GetOrderByIdQueryHandler : IRequestHandler<GetOrderByIdQuery, Order>
    {
        private readonly IOrdersRepository _productRepository;

        public GetOrderByIdQueryHandler(IOrdersRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Order> Handle(GetOrderByIdQuery query, CancellationToken cancellationToken)
        {
            var product = await _productRepository.GetByIdAsync(query.Id);
            if (product == null) return null;
            return product;
        }
    }
}
