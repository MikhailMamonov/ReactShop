using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers;
using ReactShop.Application.Mappers.Categories;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Categories.UpdateCategory
{
    public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, int>
    {
        private readonly ICategoriesRepository _productRepository;
        public UpdateCategoryCommandHandler(ICategoriesRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<int> Handle(UpdateCategoryCommand command, CancellationToken cancellationToken)
        {
            var productEntitiy = CategoryMapper.Mapper.Map<Category>(command);
            if (productEntitiy == null)
            {
                return default;
            }

            await _productRepository.EditAsync(productEntitiy);
            if (await _productRepository.SaveAsync() <= 0)
                throw new Exception("entity can not be saved");
            return command.Id;
        }
    }
}