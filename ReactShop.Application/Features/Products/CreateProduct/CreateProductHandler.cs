using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Products.CreateProduct
{
    public class CreateProductHandler : IRequestHandler<CreateProductCommand, Product>
    {
        private readonly IProductsRepository _productsRepository;
        public CreateProductHandler(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public async Task<Product> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var productEntitiy = ProductMapper.Mapper.Map<Product>(request);
            if (productEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newProduct = await _productsRepository.AddAsync(productEntitiy);
            await _productsRepository.SaveAsync();
            return newProduct;
        }
    }
}
