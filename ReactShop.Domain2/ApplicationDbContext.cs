using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using ReactShop.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Domain
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {

        public DbSet<Product> Products { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<OrderDetails> OrderDetails { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartItem>()
                .HasOne(ci => ci.Product);
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email).IsUnique();
            modelBuilder
                .ApplyConfiguration(new OrderConfiguration());
            modelBuilder
                .ApplyConfiguration(new ProductConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
