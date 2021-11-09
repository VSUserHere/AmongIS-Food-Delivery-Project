using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MinmosFoodDelivery.DTOs
{
    public class UserOrderDTO
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string ProductIds { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Total { get; set; }
    }
}
