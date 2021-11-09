using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinmosFoodDelivery.Models
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext() : base()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Allergen> Allergens { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //TODO Quantity Column in OrderProduct
            //modelBuilder.Entity("OrderProduct", b =>
            //{
            //    b.Property<int>("OrdersOrderId")
            //        .HasColumnType("int");

            //    b.Property<int>("ProductsProductId")
            //        .HasColumnType("int");

            //    b.Property<int>("Quantity")
            //       .HasColumnType("int");

            //    b.HasKey("OrdersOrderId", "ProductsProductId");

            //    b.HasIndex("ProductsProductId");

            //    b.ToTable("OrderProduct");
            //});
        }
    }
}
