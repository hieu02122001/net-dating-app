using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.API.Database.Entities
{
    [Table("User")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(32)]
        public string Username { get; set; }
        
        [StringLength(255)]
        public string Email { get; set; }
    }
}