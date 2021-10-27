using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactShop.Core.Repositories.Base;
using ReactShop.Infrastructure.Data;

namespace ReactShop.Infrastructure.Repositories.Base
{
    public class EfRepository<TDomain>: IRepository<TDomain>  where TDomain : class 
    {
        protected readonly ApplicationDbContext Context;
        public EfRepository(ApplicationDbContext context)
        {
            Context = context;
        }



        public async Task<IEnumerable<TDomain>> GetAllAsync()
        {
            return await Context.Set<TDomain>().ToListAsync();
        }

        public async Task EditAsync(TDomain entity)
        {
            Context.Set<TDomain>().Update(entity);
        }

        public async Task<TDomain> AddAsync(TDomain entity)
        {
            await Context.Set<TDomain>().AddAsync(entity);
            return entity;
        }



        public async Task<int> SaveAsync() 
        {
            return await Context.SaveChangesAsync();
        }

        private bool _disposed;

        public virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this._disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
