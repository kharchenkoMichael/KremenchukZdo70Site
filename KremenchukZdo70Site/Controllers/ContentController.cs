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
        public async Task<IEnumerable<string>> GetContentAsync(int emploueeId)
            => await _contentService.GetContentAsync(emploueeId);
    }
}
