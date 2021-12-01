using System.Collections.Generic;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Users.GetAllUsers
{
    public class GetAllUsersQuery : IRequest<IEnumerable<ApplicationUser>>
    {
        
    }
}
