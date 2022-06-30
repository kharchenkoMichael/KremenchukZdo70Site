namespace KremenchukZdo70Site.Domain.Response
{
    public class EmployeeResponse
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? SecondName { get; set; }
        public string? LastName { get; set; }
        public IEnumerable<JobTitleItemResponse>? JobTitles { get; set; }
        public string? SmallProfileUrl { get; set; }
        public string? FullProfileUrl { get; set; }
    }
}
