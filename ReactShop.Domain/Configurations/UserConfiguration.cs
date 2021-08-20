using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using ReactShop.Domain.Entities;

using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Domain.Configurations
{
    class UserConfiguration : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            builder.HasIndex(e => e.NormalizedEmail, "EmailIndex");
            builder.HasIndex(e => e.Email, "IX_AspNetUsers_Email")
                        .IsUnique()
                        .HasFilter("([Email] IS NOT NULL)");
            builder.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                            .IsUnique()
                            .HasFilter("([NormalizedUserName] IS NOT NULL)");
            builder.Property(e => e.Email).HasMaxLength(256);
            builder.Property(e => e.NormalizedEmail).HasMaxLength(256);
            builder.Property(e => e.NormalizedUserName).HasMaxLength(256);
            builder.Property(e => e.UserName).HasMaxLength(256);
        }
    }
}