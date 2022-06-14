using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
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

        [HttpGet()]
        public async Task<IEnumerable<ContactsDataResponse>> GetContactsDataAsync()
        {
            return await _contactsDataService.GetContactsDataAsync();
        }
    }
}
