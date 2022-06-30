using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IContentService
    {
        Task<IEnumerable<ContentResponse>> GetContentAsync(int employeeId);
        Task<int> CtreateContentAsync(ContentRequest request);
        Task<ContentResponse> UpdateContentAsync(ContentRequest request);
        Task DeleteContentAsync(int id);
    }
}
