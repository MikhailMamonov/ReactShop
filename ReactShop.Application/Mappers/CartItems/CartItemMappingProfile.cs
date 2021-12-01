using AutoMapper;
using ReactShop.Application.Features.CartItems.CreateCartItem;
using ReactShop.Application.Features.CartItems.UpdateCartItem;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Mappers.CartItems
{
    public class CartItemMappingProfile : Profile
    {
        public CartItemMappingProfile()
        {
            CreateMap<CartItem, CartItemModel>().ReverseMap();
            CreateMap<CartItem, CreateCartItemCommand>().ReverseMap();
            CreateMap<CartItem, UpdateCartItemCommand>().ReverseMap();
        }
    }
}
