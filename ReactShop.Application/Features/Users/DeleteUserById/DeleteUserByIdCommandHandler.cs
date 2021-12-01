using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Users.DeleteUserById
{
    public class DeleteUserByIdCommandHandler : IRequestHandler<DeleteUserByIdCommand, string>
    {
        private readonly IUsersRepository _productRepository;
        public DeleteUserByIdCommandHandler(IUsersRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<string> Handle(DeleteUserByIdCommand command, CancellationToken cancellationToken)
        {
            await _productRepository.RemoveAsync(command.Id);
            await _productRepository.SaveAsync();
            return command.Id;
        }
    }
}