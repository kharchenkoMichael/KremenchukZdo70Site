using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
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

        [HttpGet()]
        public async Task<IEnumerable<InformationOpenResponse>> GetInformationOpenAsync()
        {
            return await _informationOpenService.GetInformationOpenAsync();
        }
    }
}
