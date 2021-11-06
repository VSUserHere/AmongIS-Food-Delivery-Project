using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinmosFoodDelivery.Models
{
    public class Restaurant
    {
        public int RestaurantId { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
