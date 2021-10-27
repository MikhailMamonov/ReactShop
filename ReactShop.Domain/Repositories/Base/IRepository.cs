using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactShop.Core.Repositories.Base
{
    public interface IRepository<TDomain>: IDisposable
    where TDomain : class
    {
        
        Task<IEnumerable<TDomain>> GetAllAsync();

        Task EditAsync(TDomain data);

        Task<TDomain> AddAsync(TDomain data);

        Task<int> SaveAsync();  // сохранение изменений

    }
}
