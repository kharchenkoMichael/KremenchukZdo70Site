using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IInformationOpenService

    {
        Task<IEnumerable<InformationOpenResponse>> GetInformationOpenAsync();
    }
}
