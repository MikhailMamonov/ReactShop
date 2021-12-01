using System;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Orders.CreateOrder
{
    public class CreateOrderCommand : IRequest<Order>
    {
        public string ZipCode { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public decimal OrderTotal { get; set; }

        public DateTime OrderPlaced { get; set; }

        public string UserId { get; set; }
    }
}
