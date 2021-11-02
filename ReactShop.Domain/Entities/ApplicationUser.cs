using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using ReactShop.Core.Entities.Base;

namespace ReactShop.Core.Entities
{
    public class ApplicationUser : IdentityUser,IEntityBase<string>
    {
        public virtual ShoppingCart ShoppingCart { get; set; }

        public IEnumerable<Order> Orders { get; set; }

        public override string ToString()
        {
            return $"\n Id:{base.Id}, UserName:{base.UserName}, Email:{base.Email}";
        }

        public static ApplicationUser Create(string userId, string email, string username, string password)
        {
            var user = new ApplicationUser()
            {
                Id = userId,
                Email = email,
                UserName = username,
                PasswordHash = password,
            };
            return user;
        }
    }
}
