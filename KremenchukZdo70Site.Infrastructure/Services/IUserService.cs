using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface IUserService
    {
        Task<User?> AuthenticateUser(LoginRequest request);
    }
}