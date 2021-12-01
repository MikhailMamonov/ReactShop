using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Orders.DeleteOrderById
{
    public class DeleteOrderByIdCommandHandler : IRequestHandler<DeleteOrderByIdCommand, int>
    {
        private readonly IOrdersRepository _productRepository;
        public DeleteOrderByIdCommandHandler(IOrdersRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<int> Handle(DeleteOrderByIdCommand command, CancellationToken cancellationToken)
        {
            await _productRepository.RemoveAsync(command.Id);
            await _productRepository.SaveAsync();
            return command.Id;
        }
    }
}