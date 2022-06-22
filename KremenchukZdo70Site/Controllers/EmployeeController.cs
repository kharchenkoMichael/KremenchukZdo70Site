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
        [HttpPost()]
        public async Task<ActionResult<CollectiveResponse>> GetCollectiveAsync([FromBody] CollectiveRequest request) 
            => await _employeeService.GetColectiveAsync(request);
    }
}
