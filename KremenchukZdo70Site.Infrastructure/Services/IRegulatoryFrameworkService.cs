using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IRegulatoryFrameworkService

    {
        Task<IEnumerable<RegulatoryFrameworkResponse>> GetRegulatoryFrameworkAsync();
    }
}
