using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers.Orders;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Orders.UpdateOrder
{
    public class UpdateOrderCommandHandler : IRequestHandler<UpdateOrderCommand, int>
    {
        private readonly IOrdersRepository _productRepository;
        public UpdateOrderCommandHandler(IOrdersRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<int> Handle(UpdateOrderCommand command, CancellationToken cancellationToken)
        {
            var productEntitiy = OrderMapper.Mapper.Map<Order>(command);
            if (productEntitiy == null)
            {
                return default;
            }

            await _productRepository.EditAsync(productEntitiy);
            if (await _productRepository.SaveAsync() <= 0)
                throw new Exception("entity can not be saved");
            return command.Id;
        }
    }
}