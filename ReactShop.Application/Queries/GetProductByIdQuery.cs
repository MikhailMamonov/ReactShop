using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Repositories;
using ReactShop.Domain.Entities;

namespace ReactShop.Application.Queries
{
    public class GetProductByIdQuery : IRequest<Product>
    {
        public int Id { get; set; }
        
    }

    
}
