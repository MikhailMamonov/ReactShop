using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class CategoriesService : AbstractDatabaseService<CategoryDTO>
    {
        public CategoriesService(ApplicationDbContext db, IMapper mapper): base(db, mapper)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override async Task<string> Add(CategoryDTO model)
        {
            var entity = _mapper.Map<Category>(model);
            await _db.Categories.AddAsync(entity);
            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "category not added";
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override async Task<string> Edit(CategoryDTO model)
        {
            var entity = _mapper.Map<Category>(model);
            _db.Update(entity);

            if (await _db.SaveChangesAsync() > 0)
            {
                return null;
            }

            return "product object cant de saved ";
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public override Task<CategoryDTO> GetItem(string id)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public override async Task<IEnumerable<CategoryDTO>> GetList()
        {
            var response =
               _mapper
               .Map<IEnumerable<CategoryDTO>>(await _db.Categories.ToListAsync());
            return response;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public override async Task<string> Remove(string id)
        {
            var category = await _db.Categories.FindAsync(int.Parse(id));
            if (category == null)
                return $"Category with id {category.Id} not found";

            _db.Categories.Remove(category);
            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "category not remove";
        }
    }
}
