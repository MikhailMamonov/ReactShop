using AutoMapper;
using ReactShop.Domain;
using ReactShop.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Services.Implementations
{
    public abstract class AbstractDatabaseService<T> : IDatabaseService<T> where T: class  
    {
        protected ApplicationDbContext _db;
        protected readonly IMapper _mapper;
        protected AbstractDatabaseService(ApplicationDbContext db, IMapper mapper) {
            _db = db;
            _mapper = mapper;
        }

        public abstract Task<T> Add(T data);

        public abstract Task<string> Edit(T data);

        public abstract Task<T> GetItem(string id);

        public abstract Task<IEnumerable<T>> GetList();

        public abstract Task<string> Remove(string id);
    }
}
