using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class JobTitleService : IJobTitleService
    {
        private readonly Zdo70DbContext _context;

        public JobTitleService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<int> CtreateJobTitleAsync(JobTitleRequest request)
        {
            var jobTitle = new JobTitle
            {
                Name = request.Name!
            };

            await _context.JobTitle.AddAsync(jobTitle);
            await _context.SaveChangesAsync();

            return jobTitle.Id;
        }

        public async Task DeleteJobTitleAsync(int id)
        {
            var jobTitle = await _context.JobTitle.FirstOrDefaultAsync(item => item.Id == id);

            if (jobTitle == null)
            {
                throw new ArgumentException();
            }

            _context.JobTitle.Remove(jobTitle);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<JobTitleItemResponse>> GetJobTitlesAsync() =>
            await _context
            .JobTitle
            .Select(item =>new JobTitleItemResponse
            {
                Id = item.Id,
                Name = item.Name
            })
            .ToListAsync();

        public async Task<JobTitleItemResponse> UpdateJobTitleAsync(JobTitleRequest request)
        {
            var jobTitle = await _context.JobTitle.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (jobTitle == null)
            {
                throw new ArgumentException();
            }

            jobTitle.Name = request.Name!;

            _context.JobTitle.Update(jobTitle);
            await _context.SaveChangesAsync();

            return new JobTitleItemResponse
            {
                Id = jobTitle.Id,
                Name = jobTitle.Name,
            };
        }
    }
}
