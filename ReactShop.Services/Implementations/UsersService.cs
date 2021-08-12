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

        public UsersService(
            ApplicationDbContext db,
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager
            )
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
                    errors.ForEach(err => sb.AppendLine(err.Description+ "\n"));
            
                    return sb.ToString();
                }
        }

        public async Task<string> UpdateUserAsync(int id, User user)
        {

            return "";
        }

        public async Task<string> DeleteUserAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                return "User with id not found";
            }
            var result = await _userManager.DeleteAsync(user);
                if (result.Succeeded)
                {
                    return null;
                }
                else
                {
                    var errors = result.Errors.ToList();
                    var errString = 
                        string.Join("|", errors.Select(x => x.Description));
                    return errString;
                }
        }
    }
}
