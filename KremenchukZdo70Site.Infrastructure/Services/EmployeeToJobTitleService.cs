using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class EmployeeToJobTitleService : IEmployeeToJobTitleService
    {
        private readonly Zdo70DbContext _context;

        public EmployeeToJobTitleService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<int> CtreateEmployeeToJobTitleAsync(EmployeeToJobTitleRequest request)
        {
            var employeeToJobTitle = new EmployeeToJobTitle
            {
                EmployeeId = request.EmployeeId,
                JobTitleId = request.JobTitleId
            };

            await _context.EmployeeToJobTitle.AddAsync(employeeToJobTitle);
            await _context.SaveChangesAsync();

            return employeeToJobTitle.Id;
        }

        public async Task DeleteEmployeeToJobTitleAsync(int id)
        {
            var employeeToJobTitle = await _context.EmployeeToJobTitle.FirstOrDefaultAsync(item => item.Id == id);

            if (employeeToJobTitle == null)
            {
                throw new ArgumentException();
            }

            _context.EmployeeToJobTitle.Remove(employeeToJobTitle);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<EmployeeToJobTitleResponse>> GetEmployeeToJobTitlesByEmployeeAsync(int employeeId)
        {
            return await _context
            .EmployeeToJobTitle
            .Where(item => item.EmployeeId == employeeId)
            .Select(item => new EmployeeToJobTitleResponse
            {
                Id = item.Id,
                EmployeeId = item.EmployeeId,
                JobTitleId = item.JobTitleId
            })
            .ToListAsync();
        }

        public async Task<EmployeeToJobTitleResponse> UpdateEmployeeToJobTitleAsync(EmployeeToJobTitleRequest request)
        {
            var employeeToJobTitle = await _context.EmployeeToJobTitle.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (employeeToJobTitle == null)
            {
                throw new ArgumentException();
            }

            employeeToJobTitle.EmployeeId = request.EmployeeId!;
            employeeToJobTitle.JobTitleId = request.JobTitleId!;

            _context.EmployeeToJobTitle.Update(employeeToJobTitle);
            await _context.SaveChangesAsync();

            return new EmployeeToJobTitleResponse
            {
                Id = employeeToJobTitle.Id,
                EmployeeId = employeeToJobTitle.EmployeeId,
                JobTitleId = employeeToJobTitle.JobTitleId
            };
        }
    }
}
