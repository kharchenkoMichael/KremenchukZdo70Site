using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
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

        public async Task<int> CtreateContentAsync(ContentRequest request)
        {
            var content = new Content
            {
                EmployeeId = request.EmployeeId,
                Value = request.Value!
            };

            await _context.Content.AddAsync(content);
            await _context.SaveChangesAsync();

            return content.Id;
        }

        public async Task DeleteContentAsync(int id)
        {
            var content = await _context.Content.FirstOrDefaultAsync(item => item.Id == id);

            if (content == null)
            {
                throw new ArgumentException();
            }

            _context.Content.Remove(content);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<ContentResponse>> GetContentAsync(int employeeId) =>
            await _context
            .Content
            .Where(item => item.EmployeeId == employeeId)
            .Select(item => new ContentResponse
            {
                EmployeeId = employeeId,
                Id = item.Id,
                Value = item.Value
            })
            .ToListAsync();

        public async Task<ContentResponse> UpdateContentAsync(ContentRequest request)
        {
            var content = await _context.Content.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (content == null)
            {
                throw new ArgumentException();
            }

            content.EmployeeId = request.EmployeeId!;
            content.Value = request.Value!;

            _context.Content.Update(content);
            await _context.SaveChangesAsync();

            return new ContentResponse
            {
                Id = content.Id,
                EmployeeId = content.EmployeeId,
                Value = content.Value,
            };
        }
    }
}
