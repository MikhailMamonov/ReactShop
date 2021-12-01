using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Products.GetProductById
{
    public class GetProductByIdQueryHandler : IRequestHandler<GetProductByIdQuery, Product>
    {
        private readonly IProductsRepository _productsRepository;

        public GetProductByIdQueryHandler(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public async Task<Product> Handle(GetProductByIdQuery query, CancellationToken cancellationToken)
        {
            var product = await _productsRepository.GetByIdAsync(query.Id);
            if (product == null) return null;
            return product;
        }
    }
}
