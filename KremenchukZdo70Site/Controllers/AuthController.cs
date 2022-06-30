using KremenchukZdo70Site.Domain.Common;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KremenchukZdo70Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITokenService _tokenService;

        public AuthController(IUserService userService, ITokenService tokenService)
        {
            _userService = userService;
            _tokenService = tokenService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            var user = await _userService.AuthenticateUser(request);

            if (user is not null)
            {
                string token = _tokenService.GenerateJWT(user);
                return Ok(new
                {
                    AccessToken = token
                });
            }

            return Unauthorized();
        }
    }
}
