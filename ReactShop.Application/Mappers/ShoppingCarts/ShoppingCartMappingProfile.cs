using AutoMapper;
using ReactShop.Application.Features.CartItems.CreateCartItem;
using ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart;
using ReactShop.Application.Features.ShoppingCarts.UpdateShoppingCart;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Mappers.ShoppingCarts
{
    public class ShoppingCartMappingProfile : Profile
    {
        public ShoppingCartMappingProfile()
        {
            CreateMap<ShoppingCart, ShoppingCartModel>().ReverseMap();
            CreateMap<ShoppingCart, CreateShoppingCartCommand>().ReverseMap();
            CreateMap<ShoppingCart, UpdateShoppingCartCommand>().ReverseMap();
        }
    }
}
