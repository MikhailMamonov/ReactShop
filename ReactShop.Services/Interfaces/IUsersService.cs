using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public interface IUsersService : IRestService<ApplicationUser,UserDTO>
    {
        //public Task<List<UserDTO>> GetUsersAsync();
        //public Task<string> AddUserAsync(UserDTO user, string password);
        //public Task<string> UpdateUserAsync(int id, UserDTO user);
        //public Task<string> DeleteUserAsync(string id);
    }
}
