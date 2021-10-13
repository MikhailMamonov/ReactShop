using AutoMapper;

using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class OrderService : RestService<Order, OrderDTO>, IOrderService
    {
        protected ApplicationDbContext _db;
        protected readonly IMapper _mapper;
        public OrderService(ApplicationDbContext context, IMapper mapper) : base(context, mapper) { }
        //Task<OrderDTO> GetById(string id) {

        //}

        //Task<IEnumerable<T>> GetList();

        //Task<string> Edit(T data);

        //Task<T> Add(T data);

        //Task<string> Remove(string id);
    }
}
