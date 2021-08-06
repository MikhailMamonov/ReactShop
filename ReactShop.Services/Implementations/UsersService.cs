using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class UsersService : IUsersService
    {
        ApplicationDbContext _db;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UsersService(ApplicationDbContext db, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            _db = db;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        public async Task<List<User>> GetUsersAsync()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<string> AddUserAsync(User user, string password)
        {
            try
            {
                // добавляем пользователя
                var result = await _userManager.CreateAsync(user, password);
                if (result.Succeeded)
                {
                    bool isExists = await _roleManager.RoleExistsAsync("general");
                    if (!isExists)
                    {
                        var generalRole = new IdentityRole("general");
                        await _roleManager.CreateAsync(generalRole);
                        await _db.SaveChangesAsync(); //error points here
                    }
                    await _userManager.AddToRoleAsync(user, "general");
                    return null;

                }
                else 
                {
                    var errors = result.Errors.ToList();
                    var sb = new StringBuilder();
                    errors.ForEach(err => sb.Append(err.Description+ ","));
            
                    return sb.ToString();
                }
                
            }
            catch (Exception e)
            {
                return string.Join(", ",e.Message, e.StackTrace);
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
