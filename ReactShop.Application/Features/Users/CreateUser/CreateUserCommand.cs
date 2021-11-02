using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Users.CreateUser
{
    public class CreateUserCommand : IRequest<ApplicationUser>
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
