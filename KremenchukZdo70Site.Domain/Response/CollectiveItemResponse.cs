namespace KremenchukZdo70Site.Domain.Response
{
    public class CollectiveItemResponse
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? SecondName { get; set; }
        public string? LastName { get; set; }
        public IEnumerable<string>? JobTitleNames { get; set; }
        public string? SmallProfileUrl { get; set; }
        public string? FullProfileUrl { get; set; }
    }
}
