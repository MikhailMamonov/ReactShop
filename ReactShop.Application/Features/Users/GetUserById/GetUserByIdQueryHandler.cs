using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Application.Features.Users.GetUserById;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Handlers.Users
{
    public class GetUserByIdQueryHandler : IRequestHandler<GetUserByIdQuery, ApplicationUser>
    {
        private readonly IUsersRepository _userRepository;

        public GetUserByIdQueryHandler(IUsersRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApplicationUser> Handle(GetUserByIdQuery query, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(query.Id);
            if (user == null) return null;
            return user;
        }
    }
}
