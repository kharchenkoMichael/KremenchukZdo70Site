using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class InformationOpen
    {
        [Key]
        public int Id { get; set; }

        [StringLength(int.MaxValue)]
        public string Name { get; set; } = null!;

        [StringLength(int.MaxValue)]
        public string Href { get; set; } = null!;
    }
}
