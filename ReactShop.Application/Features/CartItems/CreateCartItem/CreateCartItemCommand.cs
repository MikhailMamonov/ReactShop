using System;
using MediatR;

using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.CartItems.CreateCartItem
{
    public class CreateCartItemCommand : IRequest<CartItem>
    {
        public decimal Amount { get; set; }
        public DateTime DateCreated { get; set; }
        public int ShoppingCartId { get; set; }
        public int ProductId { get; set; }
    }
}
