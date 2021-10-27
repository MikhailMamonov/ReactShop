using AutoMapper;
using ReactShop.Core.DTOModels;
using ReactShop.Domain;
using ReactShop.Domain.DTOModels;
using ReactShop.Domain.Entities;
using ReactShop.Infrastructure.Data;
using ReactShop.Services.RestService;

namespace ReactShop.Services.Products
{
    public class ProductsService : RestService<Product, ProductDTO>, IProductsService
    {
        protected ApplicationDbContext Db;
        protected readonly IMapper Mapper;
        public ProductsService(ApplicationDbContext db, IMapper mapper) : base(db, mapper)
        {
            Mapper = mapper;
        }

        //    /// <summary>
        //    /// 
        //    /// </summary>
        //    /// <returns></returns>
        //    public async Task<IEnumerable<ProductDTO>> GetAllAsync()
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
        //    public async Task<ProductDTO> GetByIdAsync(string id)
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
        //    public async Task<string> EditAsync(ProductDTO model)
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
        //    public async Task<string> RemoveAsync(string id)
        //    {

        //        var product = await _context.Products.FindAsync(int.Parse(id));
        //        if (product == null)
        //            return $"Product with id {id} not found";
        //        _context.Products.RemoveAsync(product);

        //        var result = await _context.SaveChangesAsync() > 0;
        //        return result ? null : "category not remove";
        //    }
        //}
    }
}


