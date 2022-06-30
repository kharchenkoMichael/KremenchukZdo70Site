namespace KremenchukZdo70Site.Domain.Response
{
    public class CollectiveResponse
    {
        public int? TotalCount { get; set; }

        public int Count { get; set; }

        public IEnumerable<EmployeeResponse> Data { get; set; } = Enumerable.Empty<EmployeeResponse>();
    }
}
