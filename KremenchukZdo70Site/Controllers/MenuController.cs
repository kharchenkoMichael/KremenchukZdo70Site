using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMenuService _menuService;

        public MenuController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        [AllowAnonymous]
        [HttpGet()]
        public async Task<IEnumerable<MenuResponse>> GetMenusAsync()
            => await _menuService.GetMenusAsync();

        [AllowAnonymous]
        [HttpGet("menu-item/{id}")]
        public async Task<MenuResponse> GetMenusItemAsync(int id)
            => await _menuService.GetMenusItemAsync(id);

        [AllowAnonymous]
        [HttpGet("parent")]
        public async Task<IEnumerable<MenuResponse>> GetParrentMenusAsync()
            => await _menuService.GetParrentMenusAsync();

        [AllowAnonymous]
        [HttpGet("{menuId}")]
        public async Task<IEnumerable<MenuResponse>> GetSubMenusAsync(int menuId)
            => await _menuService.GetSubMenusAsync(menuId);


        [HttpPost()]
        public async Task<int> CtreateMenuAsync([FromBody] MenuRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _menuService.CtreateMenuAsync(request);
        }

        [HttpPut()]
        public async Task<MenuResponse> UpdateMenuAsync([FromBody] MenuRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _menuService.UpdateMenuAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuAsync(int id)
        {
            await _menuService.DeleteMenuAsync(id);
            return Ok();
        }
    }
}
