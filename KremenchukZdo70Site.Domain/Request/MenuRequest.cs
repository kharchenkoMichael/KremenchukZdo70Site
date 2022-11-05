namespace KremenchukZdo70Site.Domain.Request
{
    public class MenuRequest
    {
        public int Id { get; set; }
        public int? ParentMenuId { get; set; }
        public string? Name { get; set; }
    }
}
