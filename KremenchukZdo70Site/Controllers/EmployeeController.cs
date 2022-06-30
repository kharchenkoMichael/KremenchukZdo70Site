using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [AllowAnonymous]
        [HttpPost("collective")]
        public async Task<ActionResult<CollectiveResponse>> GetCollectiveAsync([FromBody] CollectiveRequest request) 
            => await _employeeService.GetColectiveAsync(request);

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeResponse>> GetEmployeeAsync(int id)
            => await _employeeService.GetEmplyeeAsync(id);

        [HttpPost()]
        public async Task<int> CtreateEmployeeAsync([FromBody] EmployeeRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _employeeService.CtreateEmployeeAsync(request);
        }

        [HttpPut()]
        public async Task<EmployeeResponse> UpdateEmployeeAsync([FromBody] EmployeeRequest request)
        {
            if (request == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _employeeService.UpdateEmployeeAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeAsync(int id)
        {
            await _employeeService.DeleteEmployeeAsync(id);
            return Ok();
        }
    }
}
