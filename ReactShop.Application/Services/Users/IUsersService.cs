using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;

namespace ReactShop.Application.Services.Users
{
    public interface IUsersService : IRestService<UserModel>
    {
    }
}
