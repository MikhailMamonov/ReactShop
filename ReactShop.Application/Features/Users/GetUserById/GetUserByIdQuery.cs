using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Users.GetUserById
{
    public class GetUserByIdQuery : IRequest<ApplicationUser>
    {
        public string Id { get; set; }
    }
}
