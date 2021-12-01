using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers.ShoppingCarts;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart
{
    public class CreateShoppingCartHandler : IRequestHandler<CreateShoppingCartCommand, ShoppingCart>
    {
        private readonly IShoppingCartRepository _shoppingCartRepository;
        public CreateShoppingCartHandler(IShoppingCartRepository cartItemsRepository)
        {
            _shoppingCartRepository = cartItemsRepository;
        }

        public async Task<ShoppingCart> Handle(CreateShoppingCartCommand request, CancellationToken cancellationToken)
        {
            var shoppingCartEntitiy = ShoppingCartMapper.Mapper.Map<ShoppingCart>(request);
            if (shoppingCartEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newShoppingCart = await _shoppingCartRepository.AddAsync(shoppingCartEntitiy);
            await _shoppingCartRepository.SaveAsync();
            return newShoppingCart;
        }
    }
}
