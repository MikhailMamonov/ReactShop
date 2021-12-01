using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ReactShop.Application.Models;
using ReactShop.Application.Services.Rest;
using ReactShop.Core.Entities;
using ReactShop.Infrastructure.Data;

namespace ReactShop.Application.Services.Users
{
    public class UsersService : RestService<ApplicationUser, UserModel>, IUsersService
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
        public async override Task<IEnumerable<UserModel>> GetAll()
        {
            var users =await _userManager.Users.ToListAsync();
            var Model = _mapper.Map<IEnumerable<UserModel>>(users);
            return Model;
        }

        /// <summary>
        /// Получить элемент 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        //public async override Task<UserModel> GetById(string id)
        //{
        //    var user =await _userManager.FindByIdAsync(id);
        //    return _mapper.Map<UserModel>(user); ;
        //}

        /// <summary>
        /// редактировать
        /// </summary>
        /// <param name="UserModel"></param>
        /// <returns></returns>
        public override async Task Edit(UserModel UserModel)
        {
            var entity = _userManager.Users.Single(u => u.Id == UserModel.Id);
            entity.UserName = UserModel.UserName;
            entity.Email = UserModel.Email;

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
        //public async override Task Remove(string id)
        //{
        //    var user =await _userManager.FindByIdAsync(id);

        //    if (user == null)
        //    {
        //        throw new Exception($"ApplicationUser with id {id} not found");
        //    }

        //    var result =await _userManager.DeleteAsync(user);

        //    if (!result.Succeeded)
        //    {
        //        var errors = result.Errors.Select(er => er.Description);
        //        throw new Exception(string.Join("\n", errors));
        //    }

        //}

        /// <summary>
        /// создать
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override async Task<UserModel> Add(UserModel model)
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
