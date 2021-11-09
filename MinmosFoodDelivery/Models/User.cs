using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MinmosFoodDelivery.Models
{
    [Table("AspNetUsers")]
    public class User : IdentityUser
    {
        public string Address { get; set; }

        public List<Order> Orders { get; set; }
    }
}
