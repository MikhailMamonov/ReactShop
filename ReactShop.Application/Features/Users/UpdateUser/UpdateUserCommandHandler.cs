using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Mappers.Users;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Users.UpdateUser
{
    public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand, string>
    {
        private readonly IUsersRepository _productRepository;
        public UpdateUserCommandHandler(IUsersRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<string> Handle(UpdateUserCommand command, CancellationToken cancellationToken)
        {
            var productEntitiy = UserMapper.Mapper.Map<ApplicationUser>(command);
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