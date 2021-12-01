using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Features.Users.CreateUser;
using ReactShop.Application.Mappers.Users;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Handlers.Users
{
    public class CreateUserHandler : IRequestHandler<CreateUserCommand, ApplicationUser>
    {
        private readonly IUsersRepository _categoryRepository;
        public CreateUserHandler(IUsersRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<ApplicationUser> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var categoryEntitiy = UserMapper.Mapper.Map<ApplicationUser>(request);
            if (categoryEntitiy is null)
            {
                throw new ApplicationException("Issue with mapper");
            }

            var newUser = await _categoryRepository.AddAsync(categoryEntitiy);
            await _categoryRepository.SaveAsync();
            return newUser;
        }
    }
}
