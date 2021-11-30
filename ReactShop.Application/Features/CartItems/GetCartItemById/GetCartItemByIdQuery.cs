using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.CartItems.GetCartItemById
{
    public class GetCartItemByIdQuery : IRequest<CartItem>
    {
        public int Id { get; set; }
    }
}
