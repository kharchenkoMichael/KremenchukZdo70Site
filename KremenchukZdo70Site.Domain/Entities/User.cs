using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class User
    {
        [Key]
        public int Id { get; set; }

        [StringLength(int.MaxValue)]
        public string Name { get; set; } = null!;

        [StringLength(int.MaxValue)]
        public string PasswordHash { get; set; } = null!;
    }
}
