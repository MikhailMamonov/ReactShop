using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.ShoppingCarts.GetAllShoppingCarts
{
    public class GetAllShoppingCartsQueryHandler : IRequestHandler<GetAllShoppingCartsQuery, IEnumerable<ShoppingCart>>
    {
        private readonly IShoppingCartRepository _shoppingCartRepository;
        public GetAllShoppingCartsQueryHandler(IShoppingCartRepository shoppingCartRepository)
        {
            _shoppingCartRepository = shoppingCartRepository;
        }
        public async Task<IEnumerable<ShoppingCart>> Handle(GetAllShoppingCartsQuery query, CancellationToken cancellationToken)
        {
            var cartItemList = await _shoppingCartRepository.GetAllAsync();
            if (cartItemList == null)
            {
                return null;
            }
            return cartItemList;
        }
    }
}
