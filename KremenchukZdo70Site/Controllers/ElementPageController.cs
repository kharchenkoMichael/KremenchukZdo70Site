using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElementPageController : ControllerBase
    {
        private readonly IPageElementService _pageElementService;

        public ElementPageController(IPageElementService pageElementService)
        {
            _pageElementService = pageElementService;
        }

        [AllowAnonymous]
        [HttpGet("{menuId}")]
        public async Task<IEnumerable<ElementPageResponse>> GetElementPageAsync(int menuId)
            => await _pageElementService.GetElementPageByMenuIdAsync(menuId);


        [HttpPost()]
        public async Task<int> CtreateElementPageAsync([FromBody] ElementPageRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _pageElementService.CtreateElementPageAsync(request);
        }

        [HttpPut()]
        public async Task<ElementPageResponse> UpdateElementPageAsync([FromBody] ElementPageRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _pageElementService.UpdateElementPageAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUpdateElementPageAsyncAsync(int id)
        {
            await _pageElementService.DeleteUpdateElementPageAsyncAsync(id);
            return Ok();
        }
    }
}
