using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class ContentService : IContentService
    {
        private readonly Zdo70DbContext _context;

        public ContentService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<string>> GetContentAsync(int employeeId) =>
            await _context
            .Content
            .Where(item => item.EmployeeId == employeeId)
            .Select(item => item.Value)
            .ToListAsync();
    }
}
