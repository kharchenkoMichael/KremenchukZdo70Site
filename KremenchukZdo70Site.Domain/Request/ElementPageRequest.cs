using System.ComponentModel.DataAnnotations;

namespace KremenchukZdo70Site.Domain.Request
{
    public class ElementPageRequest
    {
        public int Id { get; set; }
        public int MenuId { get; set; }
        public string? Text { get; set; }
        public string? ImgUrl { get; set; }
        public string? Href { get; set; }
    }
}
