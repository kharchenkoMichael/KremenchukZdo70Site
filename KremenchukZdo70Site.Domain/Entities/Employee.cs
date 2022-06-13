using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class Employee
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string FirstName { get; set; } = null!;

        [StringLength(255)]
        public string SecondName { get; set; } = null!;

        [StringLength(255)]
        public string LastName { get; set; } = null!;

        [StringLength(int.MaxValue)]
        public string SmallImageUrl { get; set; } = null!;

        [StringLength(int.MaxValue)]
        public string FullImageUrl { get; set; } = null!;

        public virtual ICollection<EmployeeToJobTitle> EmployeeToJobTitles { get; set; } = new HashSet<EmployeeToJobTitle>();
    }
}
