using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IInformationOpenService

    {
        Task<IEnumerable<InformationOpenResponse>> GetInformationOpenAsync();
        Task<InformationOpenResponse> GetInformationOpenByIdAsync(int id);
        Task<int> CtreateInformationOpenAsync(InformationOpenRequest request);
        Task<InformationOpenResponse> UpdateInformationOpenAsync(InformationOpenRequest request);
        Task DeleteContactDataAsync(int id);
    }
}
