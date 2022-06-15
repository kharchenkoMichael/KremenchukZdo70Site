using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegulatoryFrameworkController : ControllerBase
    {
        private readonly IRegulatoryFrameworkService _regulatoryFrameworkService;

        public RegulatoryFrameworkController(IRegulatoryFrameworkService regulatoryFrameworkService)
        {
            _regulatoryFrameworkService = regulatoryFrameworkService;
        }

        [HttpGet()]
        public async Task<IEnumerable<RegulatoryFrameworkResponse>> GetRegulatoryFrameworkAsync()
        {
            return await _regulatoryFrameworkService.GetRegulatoryFrameworkAsync();
        }
    }
}
