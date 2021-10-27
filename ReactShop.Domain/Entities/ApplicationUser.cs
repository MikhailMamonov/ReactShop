using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;


namespace ReactShop.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ShoppingCart ShoppingCart { get; set; }

        public IEnumerable<Order> Orders { get; set; }

        public override string ToString()
        {
            return $"\n Id:{base.Id}, UserName:{base.UserName}, Email:{base.Email}";
        }
    }
}
