using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using ReactShop.Core.Repositories.Base;
using ReactShop.Infrastructure.Data;
using ReactShop.Infrastructure.Repositories.Base;

namespace ReactShop.Application.Services.Rest
{
    public class RestService<TDomain, TViewModel>: IRestService<TViewModel> where TDomain : class where TViewModel : class
    {
        //private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IRepository<TDomain> _db;

        public RestService(ApplicationDbContext context, IMapper mapper)
        {
            _db = new EfRepository<TDomain>(context);
            _mapper = mapper;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual async Task<TViewModel> Add(TViewModel model)
        {
            var entity = ConvertToEntity(model);
            await _db.AddAsync(entity);
            await _db.SaveAsync();
            return model;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual async Task Edit(TViewModel model)
        {
            var entity = ConvertToEntity(model);
            await _db.EditAsync(entity);
            await _db.SaveAsync();

        }

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        //public virtual async Task<TViewModel> GetById(string id)
        //{
        //    var entity =await _db.GetByIdAsync(id);
        //    if (entity != null)
        //    {
        //        return ConvertToViewModel(entity);
        //    }
        //    else
        //    {
        //        throw new Exception("Category not found");
        //    }
        //}

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public virtual async Task<IEnumerable<TViewModel>> GetAll()
        {
            var Model =
               _mapper
               .Map<IEnumerable<TViewModel>>(await _db.GetAllAsync());
            return Model;
        }

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        //public virtual async Task Remove(string id)
        //{
        //    await _db.RemoveAsync(id);
        //}


        public TViewModel ConvertToViewModel(TDomain entity) 
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<TDomain, TViewModel>());
            var mapper = new Mapper(config);
            var model = mapper.Map<TDomain, TViewModel>(entity);
            return model;
        }

        public TDomain ConvertToEntity(TViewModel model)
        {

            var entity = _mapper.Map<TDomain>(model);
            return entity;
        }
    }
}
