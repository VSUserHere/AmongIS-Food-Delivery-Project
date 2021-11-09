using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MinmosFoodDelivery.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public DateTime Date { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Total { get; set; }

        public string UserId { get; set; }
        public IdentityUser User { get; set; }

        //TODO??
        //public bool IsCancelled { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}