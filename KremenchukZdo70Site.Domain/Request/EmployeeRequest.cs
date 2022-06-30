namespace KremenchukZdo70Site.Domain.Request
{
    public class EmployeeRequest
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string SecondName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string SmallProfileUrl { get; set; } = string.Empty;
        public string FullProfileUrl { get; set; } = string.Empty;
    }
}
