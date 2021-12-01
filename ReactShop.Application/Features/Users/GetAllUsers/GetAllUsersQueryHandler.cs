using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Features.Users.GetAllUsers;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Users.GetAllUsers
{
    public class GetAllUsersQueryHandler : IRequestHandler<GetAllUsersQuery, IEnumerable<ApplicationUser>>
    {
        private readonly IUsersRepository _usersRepository;
        public GetAllUsersQueryHandler(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }
        public async Task<IEnumerable<ApplicationUser>> Handle(GetAllUsersQuery query, CancellationToken cancellationToken)
        {
            var categoryList = await _usersRepository.GetAllAsync();
            if (categoryList == null)
            {
                return null;
            }
            return categoryList;
        }
    }
}
