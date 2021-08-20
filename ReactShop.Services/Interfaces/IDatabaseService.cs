using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Interfaces
{
    public interface IDatabaseService<T>
    where T : class
    {
        Task<T> GetItem(string id);

        Task<IEnumerable<T>> GetList();

        Task<string> Edit(T data);

        Task<string> Add(T data);

        Task<string> Remove(string id);
    }
}
