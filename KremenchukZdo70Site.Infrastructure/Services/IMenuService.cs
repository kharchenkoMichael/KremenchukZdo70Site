using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IMenuService
    {
        Task<int> CtreateMenuAsync(MenuRequest request);
        Task DeleteMenuAsync(int id);
        Task<IEnumerable<MenuResponse>> GetMenusAsync();
        Task<IEnumerable<MenuResponse>> GetParrentMenusAsync();
        Task<IEnumerable<MenuResponse>> GetSubMenusAsync(int menuId);
        Task<MenuResponse> UpdateMenuAsync(MenuRequest request);
    }
}
