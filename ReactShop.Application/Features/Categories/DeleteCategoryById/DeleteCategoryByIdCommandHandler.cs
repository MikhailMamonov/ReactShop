using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Categories.DeleteCategoryById
{
    public class DeleteCategoryByIdCommandHandler : IRequestHandler<DeleteCategoryByIdCommand, int>
    {
        private readonly ICategoriesRepository _productRepository;
        public DeleteCategoryByIdCommandHandler(ICategoriesRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<int> Handle(DeleteCategoryByIdCommand command, CancellationToken cancellationToken)
        {
            await _productRepository.RemoveAsync(command.Id);
            await _productRepository.SaveAsync();
            return command.Id;
        }
    }
}