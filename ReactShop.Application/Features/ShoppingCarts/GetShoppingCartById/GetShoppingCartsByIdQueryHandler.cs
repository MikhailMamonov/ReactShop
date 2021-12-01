using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.ShoppingCarts.GetShoppingCartById
{
    public class GetShoppingCartsByIdQueryHandler : IRequestHandler<GetShoppingCartsByIdQuery, CartItem>
    {
        private readonly IShoppingCartRepository _shoppingCartRepository;

        public GetShoppingCartsByIdQueryHandler(IShoppingCartRepository cartItemsRepository)
        {
            _shoppingCartRepository = cartItemsRepository;
        }

        public async Task<CartItem> Handle(GetShoppingCartsByIdQuery query, CancellationToken cancellationToken)
        {
            var cartItem = await _shoppingCartRepository.GetByIdAsync(query.Id);
            if (cartItem == null) return null;
            return cartItem;
        }
    }
}
