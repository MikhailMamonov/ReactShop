using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReactShop.Core.Entities.Base;

namespace ReactShop.Core.Repositories.Base
{
    public interface IRepository<TDomain>
    where TDomain : class
    {
        
        Task<IEnumerable<TDomain>> GetAllAsync();

        Task EditAsync(TDomain data);

        Task<TDomain> AddAsync(TDomain data);
        

        Task ClearAll();

        Task<int> SaveAsync();  // сохранение изменений

    }
}
