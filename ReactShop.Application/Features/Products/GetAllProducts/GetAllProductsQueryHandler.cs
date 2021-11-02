using MediatR;

using ReactShop.Application.Queries;
using ReactShop.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using ReactShop.Application.Features.Products.GetAllProducts;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Handlers
{
    public class GetAllProductsQueryHandler : IRequestHandler<GetAllProductsQuery, IEnumerable<Product>>
    {
        private readonly IProductsRepository _productsRepository;
        public GetAllProductsQueryHandler(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }
        public async Task<IEnumerable<Product>> Handle(GetAllProductsQuery query, CancellationToken cancellationToken)
        {
            var productList = await _productsRepository.GetAllAsync();
            if (productList == null)
            {
                return null;
            }
            return productList;
        }
    }
}
