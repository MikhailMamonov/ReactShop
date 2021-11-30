using System.Collections.Generic;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.ShoppingCarts.GetAllShoppingCarts
{
    public class GetAllShoppingCartsQuery : IRequest<IEnumerable<ShoppingCart>>
    {
        
    }
}
