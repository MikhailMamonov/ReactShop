using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Categories.GetAllCategories
{
    public class GetAllCategoriesQueryHandler : IRequestHandler<GetAllCategoriesQuery, IEnumerable<Category>>
    {
        private readonly ICategoriesRepository _categoriesRepository;
        public GetAllCategoriesQueryHandler(ICategoriesRepository categoriesRepository)
        {
            _categoriesRepository = categoriesRepository;
        }
        public async Task<IEnumerable<Category>> Handle(GetAllCategoriesQuery query, CancellationToken cancellationToken)
        {
            var categoryList = await _categoriesRepository.GetAllAsync();
            if (categoryList == null)
            {
                return null;
            }
            return categoryList;
        }
    }
}
