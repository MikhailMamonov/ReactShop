using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.ShoppingCarts.GetShoppingCartById
{
    public class GetShoppingCartsByIdQuery : IRequest<CartItem>
    {
        public int Id { get; set; }
    }
}
