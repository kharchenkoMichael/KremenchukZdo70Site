using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsDataController : ControllerBase
    {
        private readonly IContactsDataService _contactsDataService;

        public ContactsDataController(IContactsDataService contactsDataService)
        {
            _contactsDataService = contactsDataService;
        }

        [AllowAnonymous]
        [HttpGet()]
        public async Task<IEnumerable<ContactsDataResponse>> GetContactsDataAsync()
        {
            return await _contactsDataService.GetContactsDataAsync();
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ContactsDataResponse> GetContactDataByIdAsync(int id)
        {
            return await _contactsDataService.GetContactDataByIdAsync(id);
        }

        [HttpPost()]
        public async Task<int> CtreateContactDataAsync([FromBody]ContactsDataRequest request)
        {
            if (request == null || request.Name == null || request.Value == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _contactsDataService.CreateContactDataAsync(request);
        }

        [HttpPut()]
        public async Task<ContactsDataResponse> UpdateContactDataAsync([FromBody]ContactsDataRequest request)
        {
            if (request==null || request.Name == null || request.Value == null)
            {
                throw new BadHttpRequestException($"request bad : {request}");
            }

            return await _contactsDataService.UpdateContactDataAsync(request);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactDataAsync(int id)
        {
            await _contactsDataService.DeleteContactDataAsync(id);
            return Ok();
        }
    }
}
