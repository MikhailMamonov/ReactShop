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
    public class CategoryService : RestService<Category,CategoryDTO>, ICategoryService
    {
        ////private readonly ApplicationDbContext _context;
        //private readonly IMapper _mapper;
        //private readonly IRepository<Category> _context;

        public CategoryService(ApplicationDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="model"></param>
        ///// <returns></returns>
        //public  CategoryDTO Add(CategoryDTO model)
        //{
        //    var entity = _mapper.Map<Category>(model);
        //    //await _context.Categories.AddAsync(entity);
        //    _context.Create(entity);
        //    _context.Save();
        //    return model;
        //    //var result = await _context.SaveChangesAsync() > 0;
        //    //if (result) 
        //    //{
        //    //    model.Id = entity.Id;
        //    //    return model;
        //    //}
        //    //else 
        //    //{
        //    //    throw new Exception("category not added");
        //    //}
        //}

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="model"></param>
        ///// <returns></returns>
        //public void Edit(CategoryDTO model)
        //{
        //    var entity = _mapper.Map<Category>(model);
        //    _context.Edit(entity);
        //    _context.Save();
        //    //if (await _context.SaveChangesAsync() > 0)
        //    //{
        //    //    return null;
        //    //}

        //    //return "product object cant de saved ";
        //}

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        //public  CategoryDTO GetById(string id)
        //{
        //    var entity = _context.GetById(id);
        //    if (entity != null)
        //    {
        //        return _mapper.Map<CategoryDTO>(entity);
        //    }
        //    else 
        //    {
        //        throw new Exception("Category not found");
        //    }
        //}

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <returns></returns>
        //public  IEnumerable<CategoryDTO> GetAll()
        //{
        //    var response =
        //       _mapper
        //       .Map<IEnumerable<CategoryDTO>>(_context.GetAll());
        //    return response;
        //}

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        //public void Remove(string id)
        //{
        //    _context.Remove(id);
        //}
    }
}
