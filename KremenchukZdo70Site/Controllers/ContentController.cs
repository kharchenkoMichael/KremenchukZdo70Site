using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        private readonly IContentService _contentService;

        public ContentController(IContentService contentService)
        {
            _contentService = contentService;
        }

        [AllowAnonymous]
        [HttpGet("{emploueeId}")]
        public async Task<IEnumerable<ContentResponse>> GetContentAsync(int emploueeId)
            => await _contentService.GetContentAsync(emploueeId);


        [HttpPost()]
        public async Task<int> CtreateContentAsync([FromBody] ContentRequest request)
        {
            if (request == null || request.EmployeeId == 0)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _contentService.CtreateContentAsync(request);
        }

        [HttpPut()]
        public async Task<ContentResponse> UpdateContentAsync([FromBody] ContentRequest request)
        {
            if (request == null || request.EmployeeId == 0)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _contentService.UpdateContentAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContentAsync(int id)
        {
            await _contentService.DeleteContentAsync(id);
            return Ok();
        }
    }
}
