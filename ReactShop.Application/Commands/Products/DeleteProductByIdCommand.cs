using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Commands
{
    public class DeleteProductByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
        public class DeleteProductByIdCommandHandler : IRequestHandler<DeleteProductByIdCommand, int>
        {
            private readonly IProductRepository _productRepository;
            public DeleteProductByIdCommandHandler(IProductRepository productRepository)
            {
                _productRepository = productRepository;
            }
            public async Task<int> Handle(DeleteProductByIdCommand command, CancellationToken cancellationToken)
            {
                await _productRepository.RemoveAsync(command.Id);
                await _productRepository.SaveAsync();
                return command.Id;
            }
        }
    }
}
