using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobTitleController : ControllerBase
    {
        private readonly IJobTitleService _jobTitleService;

        public JobTitleController(IJobTitleService jobTitleService)
        {
            _jobTitleService = jobTitleService;
        }

        [HttpGet()]
        public async Task<IEnumerable<JobTitleItemResponse>> GetJobTitlesAsync()
            => await _jobTitleService.GetJobTitlesAsync();


        [HttpPost()]
        public async Task<int> CtreateJobTitleAsync([FromBody] JobTitleRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _jobTitleService.CtreateJobTitleAsync(request);
        }

        [HttpPut()]
        public async Task<JobTitleItemResponse> UpdateJobTitleAsync([FromBody] JobTitleRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _jobTitleService.UpdateJobTitleAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobTitleAsync(int id)
        {
            await _jobTitleService.DeleteJobTitleAsync(id);
            return Ok();
        }
    }
}
