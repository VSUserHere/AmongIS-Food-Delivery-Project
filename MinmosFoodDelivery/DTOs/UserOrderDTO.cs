using System.ComponentModel.DataAnnotations.Schema;

namespace MinmosFoodDelivery.DTOs
{
    public class UserOrderDTO
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string ProductIds { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Total { get; set; }

        public string DeliveryAddress { get; set; }

        public bool IsCancelled { get; set; } = false;
    }
}
