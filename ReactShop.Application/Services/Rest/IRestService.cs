using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactShop.Application.Services.Rest
{
    public interface IRestService<TViewModel>  where TViewModel : class
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public Task<TViewModel> Add(TViewModel model);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public Task Edit(TViewModel model);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        //public Task<TViewModel> GetById(string id);

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<TViewModel>> GetAll();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        //public Task Remove(string id);


    }
}
