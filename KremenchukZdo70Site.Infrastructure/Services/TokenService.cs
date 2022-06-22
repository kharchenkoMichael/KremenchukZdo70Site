using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using KremenchukZdo70Site.Domain.Common;
using KremenchukZdo70Site.Domain.Entities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class TokenService : ITokenService
    {
        private readonly IOptions<AuthOptions> _authOptions;

        public TokenService(IOptions<AuthOptions> authOptions)
        {
            _authOptions = authOptions;
        }

        public string GenerateJWT(User user)
        {
            var authParams = _authOptions.Value;

            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.Name),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString())
            };

            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
