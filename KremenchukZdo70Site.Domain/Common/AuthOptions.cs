using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace KremenchukZdo70Site.Domain.Common
{
    public class AuthOptions
    {
        public string? Issuer { get; set; }
        public string? Audience { get; set; }
        public string Secret { get; set; } = string.Empty;
        public int TokenLifeTime { get; set; }
        public SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Secret));
        }
    }
}
