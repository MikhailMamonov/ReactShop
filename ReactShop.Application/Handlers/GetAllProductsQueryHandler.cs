using MediatR;

using ReactShop.Application.Queries;
using ReactShop.Core.Repositories;
using ReactShop.Domain.Entities;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ReactShop.Application.Handlers
{
    public class GetAllProductsQueryHandler : IRequestHandler<GetAllProductsQuery, IEnumerable<Product>>
    {
        private readonly IProductRepository _productRepository;
        public GetAllProductsQueryHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<IEnumerable<Product>> Handle(GetAllProductsQuery query, CancellationToken cancellationToken)
        {
            var productList = await _productRepository.GetAllAsync();
            if (productList == null)
            {
                return null;
            }
            return productList;
        }
    }
}
