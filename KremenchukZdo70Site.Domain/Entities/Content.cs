using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class Content
    {
        [Key]
        public int Id { get; set; }

        public int EmployeeId { get; set; }

        [StringLength(int.MaxValue)]
        public string Value { get; set; } = null!;

        public virtual Employee Employee { get; set; } = null!;
    }
}
