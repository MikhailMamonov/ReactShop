using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Products.UpdateProduct
{
    public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, int>
    {
        private readonly IProductsRepository _productsRepository;
        public UpdateProductCommandHandler(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public async Task<int> Handle(UpdateProductCommand command, CancellationToken cancellationToken)
        {
            var productEntitiy = ProductMapper.Mapper.Map<Product>(command);
            if (productEntitiy == null)
            {
                return default;
            }

            await _productsRepository.EditAsync(productEntitiy);
            if (await _productsRepository.SaveAsync() <= 0)
                throw new Exception("entity can not be saved");
            return command.Id;
        }
    }
}