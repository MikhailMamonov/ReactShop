using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers;
using ReactShop.Application.Mappers.Categories;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Categories.CreateCategory
{
    public class CreateCategoryHandler : IRequestHandler<CreateCategoryCommand, Category>
    {
        private readonly ICategoriesRepository _categoriesRepository;
        public CreateCategoryHandler(ICategoriesRepository categoriesRepository)
        {
            _categoriesRepository = categoriesRepository;
        }

        public async Task<Category> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {
            var categoryEntitiy = CategoryMapper.Mapper.Map<Category>(request);
            if (categoryEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newCategory = await _categoriesRepository.AddAsync(categoryEntitiy);
            await _categoriesRepository.SaveAsync();
            return newCategory;
        }
    }
}
