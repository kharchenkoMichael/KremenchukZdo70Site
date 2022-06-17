using KremenchukZdo70Site.Domain.Entities;
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

        public async Task<int> CtreateInformationOpenAsync(InformationOpenRequest request)
        {
            var informationOpen = new InformationOpen
            {
                Name = request.Name!,
                Href = request.Href!
            };

            await _context.InformationOpen.AddAsync(informationOpen);
            await _context.SaveChangesAsync();

            return informationOpen.Id;
        }

        public async Task DeleteContactDataAsync(int id)
        {
            var informationOpen = await _context.InformationOpen.FirstOrDefaultAsync(item => item.Id == id);

            if (informationOpen == null)
            {
                throw new ArgumentException();
            }

            _context.InformationOpen.Remove(informationOpen);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<InformationOpenResponse>> GetInformationOpenAsync()
        {
            return await _context.InformationOpen
                .Select(item => new InformationOpenResponse
                {
                    Id = item.Id,
                    Name = item.Name,
                    Href = item.Href
                })
                .ToListAsync();
        }

        public async Task<InformationOpenResponse> GetInformationOpenByIdAsync(int id)
        {
            var informationOpen = await _context.InformationOpen
                .Select(item => new InformationOpenResponse
                {
                    Id = item.Id,
                    Name = item.Name,
                    Href = item.Href
                })
                .FirstOrDefaultAsync(item => item.Id == id);

            if (informationOpen == null)
            {
                throw new ArgumentException();
            }

            return informationOpen;
        }

        public async Task<InformationOpenResponse> UpdateInformationOpenAsync(InformationOpenRequest request)
        {
            var informationOpen = await _context.InformationOpen.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (informationOpen == null)
            {
                throw new ArgumentException();
            }

            informationOpen.Name = request.Name!;
            informationOpen.Href = request.Href!;

            _context.InformationOpen.Update(informationOpen);
            await _context.SaveChangesAsync();

            return new InformationOpenResponse
            {
                Id = informationOpen.Id,
                Name = informationOpen.Name,
                Href = informationOpen.Href,
            };
        }
    }
}
