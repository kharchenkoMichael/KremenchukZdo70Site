using System.Security.Cryptography;
using System.Text;
using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class UserService : IUserService
    {
        private readonly Zdo70DbContext _context;

        public UserService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<User?> AuthenticateUser(LoginRequest request)
        {
            var user = await _context.User.FirstOrDefaultAsync(item => item.Name == request.Name);

            if (user == null || request.Password == null )
            {
                return null;
            }

            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(request.Password));
                var hash = BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();

                if (hash == user.PasswordHash)
                {
                    return user;
                }
            }

            return null;
        }
    }
}
