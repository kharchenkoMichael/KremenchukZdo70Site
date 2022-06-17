using KremenchukZdo70Site.Domain.Entities;
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

        public async Task<int> CtreateInformationOpenAsync(RegulatoryFrameworkRequest request)
        {
            var regulatoryFramework = new RegulatoryFramework
            {
                Name = request.Name!,
                Href = request.Href!
            };

            await _context.RegulatoryFramework.AddAsync(regulatoryFramework);
            await _context.SaveChangesAsync();

            return regulatoryFramework.Id;
        }

        public async Task DeleteContactDataAsync(int id)
        {
            var regulatoryFramework = await _context.RegulatoryFramework.FirstOrDefaultAsync(item => item.Id == id);

            if (regulatoryFramework == null)
            {
                throw new ArgumentException();
            }

            _context.RegulatoryFramework.Remove(regulatoryFramework);
            await _context.SaveChangesAsync();
        }

        public async Task<RegulatoryFrameworkResponse> GetInformationOpenByIdAsync(int id)
        {
            var regulatoryFramework = await _context.RegulatoryFramework
                .Select(item => new RegulatoryFrameworkResponse
                {
                    Id = item.Id,
                    Name = item.Name,
                    Href = item.Href
                })
                .FirstOrDefaultAsync(item => item.Id == id);

            if (regulatoryFramework == null)
            {
                throw new ArgumentException();
            }

            return regulatoryFramework;
        }

        public async Task<IEnumerable<RegulatoryFrameworkResponse>> GetRegulatoryFrameworkAsync()
        {
            return await _context.RegulatoryFramework
                .Select(item => new RegulatoryFrameworkResponse
                {
                    Id = item.Id,
                    Name = item.Name,
                    Href = item.Href
                })
                .ToListAsync();
        }

        public async Task<RegulatoryFrameworkResponse> UpdateInformationOpenAsync(RegulatoryFrameworkRequest request)
        {
            var regulatoryFramework = await _context.RegulatoryFramework.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (regulatoryFramework == null)
            {
                throw new ArgumentException();
            }

            regulatoryFramework.Name = request.Name!;
            regulatoryFramework.Href = request.Href!;

            _context.RegulatoryFramework.Update(regulatoryFramework);
            await _context.SaveChangesAsync();

            return new RegulatoryFrameworkResponse
            {
                Id = regulatoryFramework.Id,
                Name = regulatoryFramework.Name,
                Href = regulatoryFramework.Href,
            };
        }
    }
}
