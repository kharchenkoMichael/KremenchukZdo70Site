using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IEmployeeService
    {
        Task<CollectiveResponse> GetColectiveAsync(CollectiveRequest request);
        Task<CollectiveItemResponse> GetEmplyeeAsync(int id);
    }
}
