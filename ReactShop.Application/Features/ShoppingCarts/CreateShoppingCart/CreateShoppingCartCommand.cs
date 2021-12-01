using System;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart
{
    public class CreateShoppingCartCommand : IRequest<ShoppingCart>
    {
        public string UserId { get; set; }
    }
}
