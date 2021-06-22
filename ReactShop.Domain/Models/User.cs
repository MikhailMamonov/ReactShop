using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace ReactShop.Domain.Models
{
    public class User : IdentityUser
    {
        public string DisplayName { get; set; }
        public IEnumerable<Order> Orders { get; set; }
    }
}
