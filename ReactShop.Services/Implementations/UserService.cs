using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;

using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    class UsersService : IUsersService
    {
        ApplicationDbContext _db;
        public UsersService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<List<User>> GetUsersAsync()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<bool> AddUserAsync(User user)
        {
            try
            {
                await _db.Users.AddAsync(user);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> UpdateUserAsync(int id, User user)
        {
            return true;
        }
        public async Task<bool> DeleteUser(string id)
        {
            try
            {
                var user = await _db.Users.FindAsync(id);
                _db.Users.Remove(user);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
