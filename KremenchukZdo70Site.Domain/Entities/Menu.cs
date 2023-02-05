using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class Menu
    {
        [Key]
        public int Id { get; set; }

        public int? ParentMenuId { get; set; }

        [StringLength(int.MaxValue)]
        public string? Name { get; set; } = null!;

        public virtual Menu ParentMenu { get; set; } = null!;
    }
}
