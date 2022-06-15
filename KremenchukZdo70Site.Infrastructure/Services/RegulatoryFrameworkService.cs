using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class RegulatoryFrameworkService : IRegulatoryFrameworkService
    {
        private readonly Zdo70DbContext _context;

        public RegulatoryFrameworkService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<RegulatoryFrameworkResponse>> GetRegulatoryFrameworkAsync()
        {
            return await _context.RegulatoryFramework
                .Select(item => new RegulatoryFrameworkResponse
                {
                    Name = item.Name,
                    Href = item.Href
                })
                .ToListAsync();
        }
    }
}
