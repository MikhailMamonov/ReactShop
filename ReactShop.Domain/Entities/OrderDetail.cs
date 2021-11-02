using ReactShop.Core.Entities.Base;

#nullable disable

namespace ReactShop.Core.Entities
{
    public class OrderDetail :Entity
    {

        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}
