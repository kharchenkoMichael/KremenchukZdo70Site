using KremenchukZdo70Site.Domain.Entities;
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

        public async Task<int> CreateContactDataAsync(ContactsDataRequest request)
        {
            var contact = new ContactsData
            {
                Name = request.Name!,
                Value = request.Value!
            };

            await _context.ContactsData.AddAsync(contact);
            await _context.SaveChangesAsync();

            return contact.Id;
        }

        public async Task DeleteContactDataAsync(int id)
        {
            var contact = await _context.ContactsData.FirstOrDefaultAsync(item => item.Id == id);

            if (contact == null)
            {
                throw new ArgumentException();
            }

            _context.ContactsData.Remove(contact);
            await _context.SaveChangesAsync();
        }

        public async Task<ContactsDataResponse> GetContactDataByIdAsync(int id)
        {
            var contact = await _context.ContactsData
                .Select(item => new ContactsDataResponse
                {
                    Id = item.Id,
                    Name = item.Name,
                    Value = item.Value
                })
                .FirstOrDefaultAsync(item => item.Id == id);

            if (contact == null)
            {
                throw new ArgumentException();
            }

            return contact;
        }

        public async Task<IEnumerable<ContactsDataResponse>> GetContactsDataAsync()
        {
            return await _context.ContactsData
                .Select(item => new ContactsDataResponse
                {
                    Id = item.Id,
                    Name = item.Name,
                    Value = item.Value
                })
                .ToListAsync();
        }

        public async Task<ContactsDataResponse> UpdateContactDataAsync(ContactsDataRequest request)
        {
            var contact = await _context.ContactsData.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (contact == null)
            {
                throw new ArgumentException();
            }

            contact.Name = request.Name!;
            contact.Value = request.Value!;

            _context.ContactsData.Update(contact);
            await _context.SaveChangesAsync();

            return new ContactsDataResponse
            {
                Id = contact.Id,
                Name = contact.Name,
                Value = contact.Value,
            };
        }
    }
}
