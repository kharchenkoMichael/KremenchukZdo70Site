using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class ContactsData
    {
        [Key]
        public int Id { get; set; }

        [StringLength(int.MaxValue)]
        public string Name { get; set; } = null!;

        [StringLength(int.MaxValue)]
        public string Value { get; set; } = null!;
    }
}
