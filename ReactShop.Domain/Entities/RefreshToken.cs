using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Newtonsoft.Json;

namespace ReactShop.Core.Entities
{
    // Table to hold the refresh tokens
    public class RefreshToken
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }

        public string Token { get; set; }

        public string UserId { get; set; }

        public DateTime ExpiryOn { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CreatedByIp { get; set; }

        public DateTime RevokedOn { get; set; }

        public string RevokedByIp { get; set; }
    }
}
