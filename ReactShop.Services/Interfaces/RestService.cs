using AutoMapper;

using ReactShop.Domain;
using ReactShop.Services.Implementations;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public class RestService<TDomain, TViewModel>: IRestService<TDomain,TViewModel> where TDomain : class where TViewModel : class
    {
        //private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IRepository<TDomain> _db;

        public RestService(ApplicationDbContext context, IMapper mapper)
        {
            _db = new EFRepository<TDomain>(context);
            _mapper = mapper;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async virtual Task<TViewModel> Add(TViewModel model)
        {
            var entity = ConvertToEntity(model);
            await _db.Create(entity);
            await _db.Save();
            return model;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async virtual Task Edit(TViewModel model)
        {
            var entity = ConvertToEntity(model);
            await _db.Edit(entity);
            await _db.Save();

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async virtual Task<TViewModel> GetById(string id)
        {
            var entity =await _db.GetById(id);
            if (entity != null)
            {
                return ConvertToViewModel(entity);
            }
            else
            {
                throw new Exception("Category not found");
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async virtual Task<IEnumerable<TViewModel>> GetAll()
        {
            var response =
               _mapper
               .Map<IEnumerable<TViewModel>>(await _db.GetAll());
            return response;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async virtual Task Remove(string id)
        {
            await _db.Remove(id);
        }


        public TViewModel ConvertToViewModel(TDomain entity) 
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<TDomain, TViewModel>());
            var mapper = new Mapper(config);
            var model = mapper.Map<TDomain, TViewModel>(entity);
            return model;
        }

        public TDomain ConvertToEntity(TViewModel model)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<TViewModel, TDomain>());
            var mapper = new Mapper(config);
            var entity = _mapper.Map<TDomain>(model);
            return entity;
        }
    }
}
