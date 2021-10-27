using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers;
using ReactShop.Core.Repositories;
using ReactShop.Domain.Entities;

namespace ReactShop.Application.Commands
{
    public class UpdateProductCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Barcode { get; set; }
        public string Description { get; set; }
        public decimal BuyingPrice { get; set; }
        public decimal Rate { get; set; }
        public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, int>
        {
            private readonly IProductRepository _productRepository;
            public UpdateProductCommandHandler(IProductRepository productRepository)
            {
                _productRepository = productRepository;
            }

            public async Task<int> Handle(UpdateProductCommand command, CancellationToken cancellationToken)
            {
                var productEntitiy = ProductMapper.Mapper.Map<Product>(command);
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
}
