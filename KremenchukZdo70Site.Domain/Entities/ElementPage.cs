using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Entities
{
    public partial class ElementPage
    {
        [Key]
        public int Id { get; set; }

        public int MenuId { get; set; }

        [StringLength(int.MaxValue)]
        public string? Text { get; set; }
        
        [StringLength(int.MaxValue)]
        public string? ImgUrl { get; set; }

        [StringLength(int.MaxValue)]
        public string? Href { get; set; }

        public virtual Menu Menu { get; set; } = null!;
    }
}
