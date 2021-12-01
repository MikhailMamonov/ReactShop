using AutoMapper;
using ReactShop.Application.Features.Users.CreateUser;
using ReactShop.Application.Features.Users.UpdateUser;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Mappers.Users
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile() 
        {
            CreateMap<ApplicationUser, UserModel>();
            CreateMap<ShoppingCart, ShoppingCartModel>();
            CreateMap<CartItem, CartItemModel>().ReverseMap();

            CreateMap<ApplicationUser, CreateUserCommand>().ReverseMap();
            CreateMap<ApplicationUser, UpdateUserCommand>().ReverseMap();
        }
    }
}
