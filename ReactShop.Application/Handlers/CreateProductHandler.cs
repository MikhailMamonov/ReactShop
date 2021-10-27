using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Commands;
using ReactShop.Application.Mappers;
using ReactShop.Application.Responses;
using ReactShop.Core.Repositories;
using ReactShop.Domain.Entities;

namespace ReactShop.Application.Handlers
{
    public class CreateProductHandler : IRequestHandler<CreateProductCommand, Product>
    {
        private readonly IProductRepository _productRepository;
        public CreateProductHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Product> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var productEntitiy = ProductMapper.Mapper.Map<Product>(request);
            if (productEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newProduct = await _productRepository.AddAsync(productEntitiy);
            await _productRepository.SaveAsync();
            return newProduct;
        }
    }
}
