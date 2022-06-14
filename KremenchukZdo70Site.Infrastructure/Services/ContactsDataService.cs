using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class ContactsDataService : IContactsDataService
    {
        private readonly Zdo70DbContext _context;

        public ContactsDataService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ContactsDataResponse>> GetContactsDataAsync()
        {
            return await _context.ContactsData
                .Select(item => new ContactsDataResponse
                {
                    Name = item.Name,
                    Value = item.Value
                })
                .ToListAsync();
        }
    }
}
