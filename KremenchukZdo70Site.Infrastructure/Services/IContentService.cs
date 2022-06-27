namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IContentService
    {
        Task<IEnumerable<string>> GetContentAsync(int employeeId);
    }
}
