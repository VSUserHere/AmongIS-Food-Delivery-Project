using System.Collections.Generic;

namespace MinmosFoodDelivery.Models
{
    public class Allergen
    {
        public int AllergenId { get; set; }

        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}