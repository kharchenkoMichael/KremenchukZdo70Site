using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Response;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public interface ITokenService
    {
        string GenerateJWT(User user);
    }
}