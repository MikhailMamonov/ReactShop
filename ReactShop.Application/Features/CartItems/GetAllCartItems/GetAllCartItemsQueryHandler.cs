using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.CartItems.GetAllCartItems
{
    public class GetAllCartItemsQueryHandler : IRequestHandler<GetAllCartItemsQuery, IEnumerable<CartItem>>
    {
        private readonly ICartItemRepository _cartItemRepository;
        public GetAllCartItemsQueryHandler(ICartItemRepository cartItemRepository)
        {
            _cartItemRepository = cartItemRepository;
        }
        public async Task<IEnumerable<CartItem>> Handle(GetAllCartItemsQuery query, CancellationToken cancellationToken)
        {
            var cartItemList = await _cartItemRepository.GetAllAsync();
            if (cartItemList == null)
            {
                return null;
            }
            return cartItemList;
        }
    }
}
