using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Features.CartItems.UpdateCartItem;
using ReactShop.Application.Mappers.CartItems;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.CartItems.UpdateCartItem
{
    public class UpdateCartItemCommandHandler : IRequestHandler<UpdateCartItemCommand, int>
    {
        private readonly ICartItemRepository _cartItemRepository;
        public UpdateCartItemCommandHandler(ICartItemRepository cartItemRepository)
        {
            _cartItemRepository = cartItemRepository;
        }

        public async Task<int> Handle(UpdateCartItemCommand command, CancellationToken cancellationToken)
        {
            var cartItemEntitiy = CartItemMapper.Mapper.Map<CartItem>(command);
            if (cartItemEntitiy == null)
            {
                return default;
            }

            await _cartItemRepository.EditAsync(cartItemEntitiy);
            if (await _cartItemRepository.SaveAsync() <= 0)
                throw new Exception("entity can not be saved");
            return command.Id;
        }
    }
}