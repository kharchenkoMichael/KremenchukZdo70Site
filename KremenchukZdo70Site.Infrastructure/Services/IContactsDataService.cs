using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IContactsDataService
    {
        Task<IEnumerable<ContactsDataResponse>> GetContactsDataAsync();
    }
}
