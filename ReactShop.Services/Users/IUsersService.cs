using ReactShop.Domain.DTOModels;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Users
{
    public interface IUsersService : IRestService<UserDTO>
    {
    }
}
