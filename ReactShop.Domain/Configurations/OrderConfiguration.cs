using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using ReactShop.Domain.Entities;

namespace ReactShop.Domain.Configurations
{
    public class OrderConfiguration: IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder) 
        {
            builder.HasKey(o => o.Id);
            builder.HasIndex(e => e.UserId, "IX_Orders_UserId");

            builder.HasOne(d => d.User)
                .WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId);
        }
    }
}
