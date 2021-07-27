
using System.ComponentModel.DataAnnotations;

namespace ReactShop.Domain.Entities
{
    public class OrderDetails
    {
        [Key]
        public int Id { get; set; }
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
    }
}
