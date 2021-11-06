using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MinmosFoodDelivery.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string Name { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }

        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }

        public ICollection<Allergen> Allergens { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}