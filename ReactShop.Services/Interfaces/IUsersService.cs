using ReactShop.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public interface IUsersService
    {
        public Task<List<User>> GetUsersAsync();
        public Task<bool> AddUserAsync(User user);
        public Task<bool> UpdateUserAsync(int id, User user);
        public Task<bool> DeleteUser(string id);
    }
}
