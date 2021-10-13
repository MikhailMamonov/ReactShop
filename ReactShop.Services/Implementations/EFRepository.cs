using Microsoft.EntityFrameworkCore;

using ReactShop.Domain;
using ReactShop.Domain.Entities;
using ReactShop.Services.Interfaces;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public class EFRepository<TDomain>: IRepository<TDomain>  where TDomain : class 
    {
        protected readonly ApplicationDbContext _context;
        public EFRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<TDomain> GetById(string id)
        {
            return await _context.Set<TDomain>().FindAsync(id);
        }

        public async Task<IEnumerable<TDomain>> GetAll()
        {
            return await _context.Set<TDomain>().ToListAsync();
        }

        public async Task Edit(TDomain entity)
        {
            _context.Set<TDomain>().Update(entity);
            if (await _context.SaveChangesAsync() <= 0)
                throw new Exception("entity can not be saved");
        }

        public async Task Create(TDomain entity)
        {
            await _context.Set<TDomain>().AddAsync(entity);

            var result = await _context.SaveChangesAsync() > 0;
            if (!result)
                throw new Exception("products not added");
        }

        public async Task Remove(string id)
        {
            var entity = await _context.Categories.FindAsync(int.Parse(id));
            _context.Categories.Remove(entity);
        }

        public async Task Save() 
        {
            await _context.SaveChangesAsync();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
