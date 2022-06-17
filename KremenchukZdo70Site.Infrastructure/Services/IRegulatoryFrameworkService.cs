using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IRegulatoryFrameworkService

    {
        Task<IEnumerable<RegulatoryFrameworkResponse>> GetRegulatoryFrameworkAsync();
        Task<RegulatoryFrameworkResponse> GetInformationOpenByIdAsync(int id);
        Task<int> CtreateInformationOpenAsync(RegulatoryFrameworkRequest request);
        Task<RegulatoryFrameworkResponse> UpdateInformationOpenAsync(RegulatoryFrameworkRequest request);
        Task DeleteContactDataAsync(int id);
    }
}
