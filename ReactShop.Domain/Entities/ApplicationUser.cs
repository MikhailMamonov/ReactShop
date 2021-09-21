using Microsoft.AspNetCore.Identity;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactShop.Domain.Entities
{
    public class ApplicationUser:IdentityUser
    {
        public IEnumerable<Order> Orders { get; set; }

        public override string ToString()
        {
            return $"\n Id:{base.Id}, UserName:{base.UserName}, Email:{base.Email}";
        }
    }
}
