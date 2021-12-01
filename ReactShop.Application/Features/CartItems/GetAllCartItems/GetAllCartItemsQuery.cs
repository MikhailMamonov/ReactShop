using System.Collections.Generic;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.CartItems.GetAllCartItems
{
    public class GetAllCartItemsQuery : IRequest<IEnumerable<CartItem>>
    {
        
    }
}
