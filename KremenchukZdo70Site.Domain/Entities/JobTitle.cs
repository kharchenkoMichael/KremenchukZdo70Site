using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class JobTitle
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string Name { get; set; } = null!;

        public virtual ICollection<EmployeeToJobTitle> EmployeeToJobTitles { get; set; } = new HashSet<EmployeeToJobTitle>();
    }
}
