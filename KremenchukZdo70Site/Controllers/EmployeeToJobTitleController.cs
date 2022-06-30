using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeToJobTitleController : ControllerBase
    {
        private readonly IEmployeeToJobTitleService _employeeToJobTitleService;

        public EmployeeToJobTitleController(IEmployeeToJobTitleService employeeToJobTitleService)
        {
            _employeeToJobTitleService = employeeToJobTitleService;
        }

        [HttpGet("{employeeId}")]
        public async Task<IEnumerable<EmployeeToJobTitleResponse>> GetEmployeeToJobTitlesByEmployeeAsync(int employeeId)
            => await _employeeToJobTitleService.GetEmployeeToJobTitlesByEmployeeAsync(employeeId);


        [HttpPost()]
        public async Task<int> CtreateEmployeeToJobTitleAsync([FromBody] EmployeeToJobTitleRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _employeeToJobTitleService.CtreateEmployeeToJobTitleAsync(request);
        }

        [HttpPut()]
        public async Task<EmployeeToJobTitleResponse> UpdateEmployeeToJobTitleAsync([FromBody] EmployeeToJobTitleRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _employeeToJobTitleService.UpdateEmployeeToJobTitleAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeToJobTitleAsync(int id)
        {
            await _employeeToJobTitleService.DeleteEmployeeToJobTitleAsync(id);
            return Ok();
        }
    }
}
