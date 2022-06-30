using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IEmployeeToJobTitleService
    {
        Task<IEnumerable<EmployeeToJobTitleResponse>> GetEmployeeToJobTitlesByEmployeeAsync(int employeeId);
        Task<int> CtreateEmployeeToJobTitleAsync(EmployeeToJobTitleRequest request);
        Task<EmployeeToJobTitleResponse> UpdateEmployeeToJobTitleAsync(EmployeeToJobTitleRequest request);
        Task DeleteEmployeeToJobTitleAsync(int id);
    }
}
