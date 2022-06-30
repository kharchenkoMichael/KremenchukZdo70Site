using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IContactsDataService
    {
        Task<IEnumerable<ContactsDataResponse>> GetContactsDataAsync();
        Task<ContactsDataResponse> GetContactDataByIdAsync(int id);
        Task<int> CreateContactDataAsync(ContactsDataRequest request);
        Task<ContactsDataResponse> UpdateContactDataAsync(ContactsDataRequest request);
        Task DeleteContactDataAsync(int id);
    }
}
