using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers.ShoppingCarts;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.ShoppingCarts.UpdateShoppingCart
{
    public class UpdateShoppingCartCommandHandler : IRequestHandler<UpdateShoppingCartCommand, int>
    {
        private readonly IShoppingCartRepository _shoppingCartRepository;
        public UpdateShoppingCartCommandHandler(IShoppingCartRepository shoppingCartRepository)
        {
            _shoppingCartRepository = shoppingCartRepository;
        }

        public async Task<int> Handle(UpdateShoppingCartCommand command, CancellationToken cancellationToken)
        {
            var cartItemEntitiy = ShoppingCartMapper.Mapper.Map<ShoppingCart>(command);
            if (cartItemEntitiy == null)
            {
                return default;
            }

            await _shoppingCartRepository.EditAsync(cartItemEntitiy);
            if (await _shoppingCartRepository.SaveAsync() <= 0)
                throw new Exception("entity can not be saved");
            return command.Id;
        }
    }
}