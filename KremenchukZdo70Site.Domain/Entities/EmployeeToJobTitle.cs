using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class EmployeeToJobTitle
    {
        [Key]
        public int Id { get; set; }

        public int EmployeeId { get; set; }

        public int JobTitleId { get; set; }

        public virtual Employee Employee { get; set; } = null!;

        public virtual JobTitle JobTitle { get; set; } = null!;
    }
}
