using AutoMapper;
using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class ProductsService : AbstractDatabaseService<ProductDTO>
    {
        public ProductsService(ApplicationDbContext db, IMapper mapper) : base(db, mapper)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public override async Task<IEnumerable<ProductDTO>> GetList() 
        {
            var response =
                _mapper
                .Map<IEnumerable<ProductDTO>>(await _db.Products.ToListAsync());
            return response;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public override async Task<ProductDTO> GetItem(string id) 
        {
            var response =
               _mapper.Map<ProductDTO>(await _db.Products.FindAsync(id));
            return response;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override async Task<ProductDTO> Add(ProductDTO model) 
        {
            var entity = _mapper.Map<Product>(model);
            await _db.Products.AddAsync(entity);
            var result = await _db.SaveChangesAsync() > 0;
            if (result) 
            {
                model.Id = entity.Id;
                return model;
            }
            else 
            {
                throw new Exception("products not added");
            } 
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override async Task<string> Edit(ProductDTO model)
        {
            var entity = _mapper.Map<Product>(model);
            _db.Products.Update(entity);
            if (await _db.SaveChangesAsync()>0)
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
        public override async Task<string> Remove(string id)
        {

            var product = await _db.Products.FindAsync(int.Parse(id));
            if (product == null)
                return $"Product with id {id} not found";
            _db.Products.Remove(product);

            var result = await _db.SaveChangesAsync() > 0;
            return result ? null : "category not remove";
        }
    }
}


