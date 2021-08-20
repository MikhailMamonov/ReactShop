using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ReactShop.Services.Implementations
{
    public class UsersService : AbstractDatabaseService<UserDTO>/*IUsersService*/
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public UsersService(
            ApplicationDbContext db,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IMapper mapper
            ) : base(db, mapper)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        /// <summary>
        ///получить список 
        /// </summary>
        /// <returns></returns>
        public override async Task<IEnumerable<UserDTO>> GetList()
        {
            var users = await _userManager.Users.ToListAsync();
            var response = _mapper.Map<IEnumerable<UserDTO>>(users);
            return response;
        }

        /// <summary>
        /// Получить элемент 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public override async Task<UserDTO> GetItem(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            return _mapper.Map<UserDTO>(user); ;
        }

        /// <summary>
        /// редактировать
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns></returns>
        public override async Task<string> Edit(UserDTO userDto)
        {
            var entity = _mapper.Map<ApplicationUser>(userDto);
            var result = await _userManager.UpdateAsync(entity);
            if (result.Succeeded)
            {
                return null;
            }
            else
            {
                var errors = result.Errors.Select(er => er.Description);
                return string.Join("\n", errors);
            }
        }

        /// <summary>
        /// удалить
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public override async Task<string> Remove(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                return $"ApplicationUser with id {id} not found";
            }

            var result = await _userManager.DeleteAsync(user);

            if (result.Succeeded)
            {
                return "";
            }
            else
            {
                var errors = result.Errors.Select(er => er.Description);
                return string.Join("\n", errors);
            }

        }

        /// <summary>
        /// создать
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override async Task<string> Add(UserDTO model)
        {
            ApplicationUser user = 
                new ApplicationUser { UserName = model.Email,
                    Email = model.Email, DisplayName = model.DisplayName };
            // добавляем пользователя
            var result = await _userManager.CreateAsync(user, model.Password);
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
                var errors = result.Errors.Select(er => er.Description);
                return string.Join("\n", errors);
            }
        }
    }
}
