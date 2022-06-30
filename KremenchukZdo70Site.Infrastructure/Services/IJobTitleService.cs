using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IJobTitleService
    {
        Task<IEnumerable<JobTitleItemResponse>> GetJobTitlesAsync();
        Task<int> CtreateJobTitleAsync(JobTitleRequest request);
        Task<JobTitleItemResponse> UpdateJobTitleAsync(JobTitleRequest request);
        Task DeleteJobTitleAsync(int id);
    }
}
