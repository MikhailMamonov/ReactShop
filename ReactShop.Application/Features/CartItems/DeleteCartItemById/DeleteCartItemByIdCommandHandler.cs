using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Features.ShoppingCarts.DeleteShoppingCartById;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.CartItems.DeleteCartItemById
{
    public class DeleteCartItemByIdCommandHandler : IRequestHandler<DeleteShoppingCartByIdCommand, int>
    {
        private readonly IShoppingCartRepository _productsRepository;
        public DeleteCartItemByIdCommandHandler(IShoppingCartRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }
        public async Task<int> Handle(DeleteShoppingCartByIdCommand command, CancellationToken cancellationToken)
        {
            await _productsRepository.RemoveAsync(command.Id);
            await _productsRepository.SaveAsync();
            return command.Id;
        }
    }
}