using AutoMapper;
using ReactShop.Application.Features.Orders.CreateOrder;
using ReactShop.Application.Features.Orders.UpdateOrder;
using ReactShop.Application.Models;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Mappers.Orders
{
    public class OrderMappingProfile : Profile
    {
        public OrderMappingProfile()
        {
            CreateMap<Order, OrderModel>().ReverseMap();
            CreateMap<Order, CreateOrderCommand>().ReverseMap();
            CreateMap<Order, UpdateOrderCommand>().ReverseMap();
        }
    }
}
