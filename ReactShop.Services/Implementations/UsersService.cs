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
    public class UsersService : RestService<ApplicationUser, UserDTO>, IUsersService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UsersService(
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IMapper mapper
            ) : base(context, mapper)
        {
            _context = context;
            _mapper = mapper;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        /// <summary>
        ///получить список 
        /// </summary>
        /// <returns></returns>
        public async override Task<IEnumerable<UserDTO>> GetAll()
        {
            var users =await _userManager.Users.ToListAsync();
            var response = _mapper.Map<IEnumerable<UserDTO>>(users);
            return response;
        }

        /// <summary>
        /// Получить элемент 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async override Task<UserDTO> GetById(string id)
        {
            var user =await _userManager.FindByIdAsync(id);
            return _mapper.Map<UserDTO>(user); ;
        }

        /// <summary>
        /// редактировать
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns></returns>
        public override async Task Edit(UserDTO userDto)
        {
            var entity = _userManager.Users.Single(u => u.Id == userDto.Id);
            entity.UserName = userDto.UserName;
            entity.Email = userDto.Email;

            var result =await _userManager.UpdateAsync(entity);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(er => er.Description);
                throw new Exception(string.Join("\n", errors));
            }
        }

        /// <summary>
        /// удалить
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async override Task Remove(string id)
        {
            var user =await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                throw new Exception($"ApplicationUser with id {id} not found");
            }

            var result =await _userManager.DeleteAsync(user);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(er => er.Description);
                throw new Exception(string.Join("\n", errors));
            }

        }

        /// <summary>
        /// создать
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async override Task<UserDTO> Add(UserDTO model)
        {
            ApplicationUser user = 
                new ApplicationUser { UserName = model.Email,
                    Email = model.Email };
            // добавляем пользователя
            var result =await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                bool isExists = await _roleManager.RoleExistsAsync("general");
                if (!isExists)
                {
                    var generalRole = new IdentityRole("general");
                    await _roleManager.CreateAsync(generalRole);
                    await _context.SaveChangesAsync(); //error points here
                }
                await _userManager.AddToRoleAsync(user, "general");
                model.Id = user.Id;
                model.Password = "";
                return model;

            }
            else
            {
                var errors = result.Errors.Select(er => er.Description);
                throw new Exception(string.Join("\n", errors));
            }
        }


    }
}
