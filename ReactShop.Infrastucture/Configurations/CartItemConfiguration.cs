﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ReactShop.Core.Entities;

namespace ReactShop.Infrastructure.Configurations
{
    class CartItemConfiguration : IEntityTypeConfiguration<CartItem>
    {
        public void Configure(EntityTypeBuilder<CartItem> builder)
        {
            builder.HasKey(o => o.Id);
            builder.HasIndex(e => e.ProductId, "IX_CartItems_ProductId1");
            builder.Property(e => e.Amount).HasColumnType("decimal(18, 2)");

            builder.HasOne(d => d.Product)
                .WithMany(p => p.CartItems)
                .HasForeignKey(d => d.ProductId);

            builder.HasOne(i => i.ShoppingCart)
                .WithMany(c => c.CartItems)
                .HasForeignKey(c => c.ShoppingCartId);
        }
    }
}
