using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers.ShoppingCarts;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.CartItems.CreateCartItem
{
    public class CreateCartItemHandler : IRequestHandler<CreateCartItemCommand, CartItem>
    {
        private readonly ICartItemRepository _cartItemsRepository;
        public CreateCartItemHandler(ICartItemRepository cartItemsRepository)
        {
            _cartItemsRepository = cartItemsRepository;
        }

        public async Task<CartItem> Handle(CreateCartItemCommand request, CancellationToken cancellationToken)
        {
            var cartItemEntitiy = ShoppingCartMapper.Mapper.Map<CartItem>(request);
            if (cartItemEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newCartItem = await _cartItemsRepository.AddAsync(cartItemEntitiy);
            await _cartItemsRepository.SaveAsync();
            return newCartItem;
        }
    }
}
