using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
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

        [AllowAnonymous]
        [HttpGet()]
        public async Task<IEnumerable<RegulatoryFrameworkResponse>> GetRegulatoryFrameworkAsync()
        {
            return await _regulatoryFrameworkService.GetRegulatoryFrameworkAsync();
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<RegulatoryFrameworkResponse> GetInformationOpenByIdAsync(int id)
        {
            return await _regulatoryFrameworkService.GetInformationOpenByIdAsync(id);
        }

        [HttpPost()]
        public async Task<int> CtreateInformationOpenAsync([FromBody] RegulatoryFrameworkRequest request)
        {
            if (request == null || request.Name == null || request.Href == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _regulatoryFrameworkService.CtreateInformationOpenAsync(request);
        }

        [HttpPut()]
        public async Task<RegulatoryFrameworkResponse> UpdateInformationOpenAsync([FromBody] RegulatoryFrameworkRequest request)
        {
            if (request == null || request.Name == null || request.Href == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _regulatoryFrameworkService.UpdateInformationOpenAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactDataAsync(int id)
        {
            await _regulatoryFrameworkService.DeleteContactDataAsync(id);
            return Ok();
        }
    }
}
