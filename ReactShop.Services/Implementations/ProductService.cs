using AutoMapper;

using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class ProductsService : RestService<Product, ProductDTO>, IProductsService
    {
        protected ApplicationDbContext _db;
        protected readonly IMapper _mapper;
        public ProductsService(ApplicationDbContext db, IMapper mapper) : base(db, mapper)
        {
        }

        //    /// <summary>
        //    /// 
        //    /// </summary>
        //    /// <returns></returns>
        //    public async Task<IEnumerable<ProductDTO>> GetAll()
        //    {
        //        var response =
        //            _mapper
        //            .Map<IEnumerable<ProductDTO>>(await _context.Products.ToListAsync());
        //        return response;
        //    }


        //    /// <summary>
        //    /// 
        //    /// </summary>
        //    /// <param name="id"></param>
        //    /// <returns></returns>
        //    public async Task<ProductDTO> GetById(string id)
        //    {
        //        var response =
        //           _mapper.Map<ProductDTO>(await _context.Products.FindAsync(id));
        //        return response;
        //    }
        //    /// <summary>
        //    /// 
        //    /// </summary>
        //    /// <param name="model"></param>
        //    /// <returns></returns>
        //    public async Task<ProductDTO> Add(ProductDTO model)
        //    {
        //        //if (model.Image != null)
        //        //{
        //        //    model.Image = model.Image.Replace("data:image/png;base64,", String.Empty);
        //        //}

        //        var entity = _mapper.Map<Product>(model);

        //        await _context.Products.AddAsync(entity);

        //        var result = await _context.SaveChangesAsync() > 0;

        //        if (result)
        //        {
        //            model.Id = entity.Id;
        //            return model;
        //        }
        //        else
        //        {
        //            throw new Exception("products not added");
        //        }
        //    }

        //    /// <summary>
        //    /// 
        //    /// </summary>
        //    /// <param name="model"></param>
        //    /// <returns></returns>
        //    public async Task<string> Edit(ProductDTO model)
        //    {
        //        var entity = _mapper.Map<Product>(model);
        //        _context.Products.Update(entity);
        //        if (await _context.SaveChangesAsync() > 0)
        //        {
        //            return null;
        //        }

        //        return "product object cant de saved ";
        //    }
        //    /// <summary>
        //    /// 
        //    /// </summary>
        //    /// <param name="id"></param>
        //    /// <returns></returns>
        //    public async Task<string> Remove(string id)
        //    {

        //        var product = await _context.Products.FindAsync(int.Parse(id));
        //        if (product == null)
        //            return $"Product with id {id} not found";
        //        _context.Products.Remove(product);

        //        var result = await _context.SaveChangesAsync() > 0;
        //        return result ? null : "category not remove";
        //    }
        //}
    }
}


