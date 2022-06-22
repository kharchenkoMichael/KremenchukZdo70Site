using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InformationOpenController : ControllerBase
    {
        private readonly IInformationOpenService _informationOpenService;

        public InformationOpenController(IInformationOpenService informationOpenService)
        {
            _informationOpenService = informationOpenService;
        }

        [AllowAnonymous]
        [HttpGet()]
        public async Task<IEnumerable<InformationOpenResponse>> GetInformationOpenAsync()
        {
            return await _informationOpenService.GetInformationOpenAsync();
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<InformationOpenResponse> GetInformationOpenByIdAsync(int id)
        {
            return await _informationOpenService.GetInformationOpenByIdAsync(id);
        }

        [HttpPost()]
        public async Task<int> CtreateInformationOpenAsync([FromBody] InformationOpenRequest request)
        {
            if (request == null || request.Name == null || request.Href == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _informationOpenService.CtreateInformationOpenAsync(request);
        }

        [HttpPut()]
        public async Task<InformationOpenResponse> UpdateInformationOpenAsync([FromBody] InformationOpenRequest request)
        {
            if (request == null || request.Name == null || request.Href == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _informationOpenService.UpdateInformationOpenAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactDataAsync(int id)
        {
            await _informationOpenService.DeleteContactDataAsync(id);
            return Ok();
        }
    }
}
