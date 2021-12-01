using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Products.DeleteProductById
{
    public class DeleteProductByIdCommandHandler : IRequestHandler<DeleteProductByIdCommand, int>
    {
        private readonly IProductsRepository _productsRepository;
        public DeleteProductByIdCommandHandler(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }
        public async Task<int> Handle(DeleteProductByIdCommand command, CancellationToken cancellationToken)
        {
            await _productsRepository.RemoveAsync(command.Id);
            await _productsRepository.SaveAsync();
            return command.Id;
        }
    }
}