using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IEmployeeService
    {
        Task<CollectiveResponse> GetColectiveAsync(CollectiveRequest request);
        Task<EmployeeResponse> GetEmplyeeAsync(int id);
        Task<int> CtreateEmployeeAsync(EmployeeRequest request);
        Task<EmployeeResponse> UpdateEmployeeAsync(EmployeeRequest request);
        Task DeleteEmployeeAsync(int id);
    }
}
