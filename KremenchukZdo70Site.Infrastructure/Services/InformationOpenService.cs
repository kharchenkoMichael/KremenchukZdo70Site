using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class InformationOpenService : IInformationOpenService
    {
        private readonly Zdo70DbContext _context;

        public InformationOpenService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<InformationOpenResponse>> GetInformationOpenAsync()
        {
            return await _context.InformationOpen
                .Select(item => new InformationOpenResponse
                {
                    Name = item.Name,
                    Href = item.Href
                })
                .ToListAsync();
        }
    }
}
