using Microsoft.AspNetCore.Identity;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Domain.Entities
{
    public class User:IdentityUser
    {
        public string DisplayName { get; set; }
        public IEnumerable<Order> Orders { get; set; }
    }
}
