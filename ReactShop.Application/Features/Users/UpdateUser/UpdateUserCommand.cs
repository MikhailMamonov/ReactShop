using MediatR;

namespace ReactShop.Application.Features.Users.UpdateUser
{
    public class UpdateUserCommand : IRequest<string>
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }
}
