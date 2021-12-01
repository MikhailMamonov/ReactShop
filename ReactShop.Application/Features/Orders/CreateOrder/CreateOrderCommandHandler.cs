using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers.Orders;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Orders.CreateOrder
{
    public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, Order>
    {
        private readonly IOrdersRepository _categoryRepository;
        public CreateOrderCommandHandler(IOrdersRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<Order> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            var categoryEntitiy = OrderMapper.Mapper.Map<Order>(request);
            if (categoryEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newOrder = await _categoryRepository.AddAsync(categoryEntitiy);
            await _categoryRepository.SaveAsync();
            return newOrder;
        }
    }
}
