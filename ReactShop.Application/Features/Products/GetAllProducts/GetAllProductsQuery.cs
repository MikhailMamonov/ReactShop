using System.Collections.Generic;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Products.GetAllProducts
{
    public class GetAllProductsQuery : IRequest<IEnumerable<Product>>
    {
        
    }
}
