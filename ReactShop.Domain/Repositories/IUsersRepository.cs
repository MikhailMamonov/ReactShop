using ReactShop.Core.Repositories.Base;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ReactShop.Core.Entities;

namespace ReactShop.Core.Repositories
{
    public interface IUsersRepository : IRepository<ApplicationUser>
    {
        Task<ApplicationUser> GetByIdAsync(string id);

        Task RemoveAsync(string id);
    }
}

