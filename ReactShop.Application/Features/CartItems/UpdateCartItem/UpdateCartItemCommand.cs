using System;
using MediatR;

namespace ReactShop.Application.Features.CartItems.UpdateCartItem
{
    public class UpdateCartItemCommand : IRequest<int>
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public int InStock { get; set; }
        public DateTime DateCreated { get; set; }
        public int? ProductId { get; set; }
        public int? ShoppingCartId { get; set; }

    }
}
