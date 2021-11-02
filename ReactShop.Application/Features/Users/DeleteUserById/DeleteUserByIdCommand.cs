using MediatR;

namespace ReactShop.Application.Features.Users.DeleteUserById
{
    public class DeleteUserByIdCommand : IRequest<string>
    {
        public string Id { get; set; }
        
    }
}
