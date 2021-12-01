using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ReactShop.Core.Entities;

namespace ReactShop.Infrastructure.Configurations
{
    class OrderDetailsConfiguration : IEntityTypeConfiguration<OrderDetail>
    {
        public void Configure(EntityTypeBuilder<OrderDetail> builder)
        {
               builder.HasIndex(e => e.OrderId, "IX_OrderDetails_OrderId");

                builder.HasIndex(e => e.ProductId, "IX_OrderDetails_ProductId");

                builder.HasOne(d => d.Order)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.OrderId);

                builder.HasOne(d => d.Product)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.ProductId);
          
        }
    }
}
