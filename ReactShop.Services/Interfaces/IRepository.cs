using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public interface IRepository<TDomain>: IDisposable
    where TDomain : class
    {
        Task<TDomain> GetById(string id);

        Task<IEnumerable<TDomain>> GetAll();

        Task Edit(TDomain data);

        Task Create(TDomain data);

        Task Remove(string id);

        Task Save();  // сохранение изменений

    }
}
