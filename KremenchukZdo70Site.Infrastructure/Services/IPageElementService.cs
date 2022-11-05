using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IPageElementService
    {
        Task<int> CtreateElementPageAsync(ElementPageRequest request);
        Task DeleteUpdateElementPageAsyncAsync(int id);
        Task<IEnumerable<ElementPageResponse>> GetElementPageByMenuIdAsync(int menuId);
        Task<ElementPageResponse> UpdateElementPageAsync(ElementPageRequest request);
    }
}
