namespace KremenchukZdo70Site.Domain.Request
{
    public class EmployeeToJobTitleRequest
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int JobTitleId { get; set; }
    }
}
