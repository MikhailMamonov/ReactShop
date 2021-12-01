using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Features.Categories.GetCategoryById;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Handlers.Categories
{
    public class GetCategoryByIdQueryHandler : IRequestHandler<GetCategoryByIdQuery, Category>
    {
        private readonly ICategoriesRepository _productRepository;

        public GetCategoryByIdQueryHandler(ICategoriesRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Category> Handle(GetCategoryByIdQuery query, CancellationToken cancellationToken)
        {
            var product = await _productRepository.GetByIdAsync(query.Id);
            if (product == null) return null;
            return product;
        }
    }
}
