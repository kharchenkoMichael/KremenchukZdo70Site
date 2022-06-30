using System.Linq;
using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly Zdo70DbContext _context;

        public EmployeeService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<int> CtreateEmployeeAsync(EmployeeRequest request)
        {
            var employee = new Employee
            {
                FirstName = request.FirstName,
                SecondName = request.SecondName,
                LastName = request.LastName,
                FullImageUrl = request.FullProfileUrl,
                SmallImageUrl = request.SmallProfileUrl,
            };

            await _context.Employee.AddAsync(employee);
            await _context.SaveChangesAsync();

            return employee.Id;
        }

        public async Task DeleteEmployeeAsync(int id)
        {
            var employee = await _context.Employee.FirstOrDefaultAsync(item => item.Id == id);

            if (employee == null)
            {
                throw new ArgumentException();
            }

            var contents = _context.Content.Where(item => item.EmployeeId == id);
            _context.Content.RemoveRange(contents);

            var empToJobs = _context.EmployeeToJobTitle.Where(item => item.EmployeeId == id);
            _context.EmployeeToJobTitle.RemoveRange(empToJobs);

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();
        }

        public async Task<CollectiveResponse> GetColectiveAsync(CollectiveRequest request)
        {
            if (request is null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            var (totalCount, collective) = await SelectCollectiveAsync(request);

            return new CollectiveResponse
            {
                TotalCount = totalCount,
                Count = collective.Count,
                Data = collective,
            };
        }

        public async Task<EmployeeResponse> GetEmplyeeAsync(int id)
        {
            var employee = await _context.Employee
                .Select(item => new EmployeeResponse
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    SecondName = item.SecondName,
                    LastName = item.LastName,
                    SmallProfileUrl = item.SmallImageUrl,
                    FullProfileUrl = item.FullImageUrl,
                    JobTitles = item.EmployeeToJobTitles.Select(etj => new JobTitleItemResponse{
                        Id = etj.JobTitleId,
                        Name = etj.JobTitle.Name }
                    )
                })
                .FirstOrDefaultAsync(item => item.Id == id);

            if (employee == null)
            {
                throw new ArgumentException(id + "notFound");
            }

            return employee;
        }

        public async Task<EmployeeResponse> UpdateEmployeeAsync(EmployeeRequest request)
        {
            var employee = await _context.Employee.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (employee == null)
            {
                throw new ArgumentException();
            }

            employee.FirstName = request.FirstName;
            employee.SecondName = request.SecondName;
            employee.LastName = request.LastName;
            employee.FullImageUrl = request.FullProfileUrl;
            employee.SmallImageUrl = request.SmallProfileUrl;

            _context.Employee.Update(employee);
            await _context.SaveChangesAsync();

            return new EmployeeResponse
            {
                Id = employee.Id,
                FirstName = employee.FirstName,
                SecondName = employee.SecondName,
                LastName = employee.LastName,
                FullProfileUrl = employee.FullImageUrl,
                SmallProfileUrl = employee.SmallImageUrl,
            };
        }

        private async Task<(int? TotalCount, IList<EmployeeResponse> Data)> SelectCollectiveAsync(CollectiveRequest request)
        {
            var resultQuery = _context
                .Employee
                .AsNoTracking()
                .Select(item => new EmployeeResponse
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    SecondName = item.SecondName,
                    LastName = item.LastName,
                    SmallProfileUrl = item.SmallImageUrl,
                    FullProfileUrl = item.FullImageUrl,
                    JobTitles = item.EmployeeToJobTitles.Select(etj => new JobTitleItemResponse
                    {
                        Id = etj.JobTitleId,
                        Name = etj.JobTitle.Name
                    })
                });

            int? totalCount = null;
            if (request.CalcCountTotal ?? true)
            {
                totalCount = await resultQuery.CountAsync();
            }

            if (request.Size > 0 && request.Page >= 0)
            {
                resultQuery = resultQuery.Skip(request.Size * request.Page).Take(request.Size);
            }

            return (totalCount, resultQuery.ToList());
        }
    }
}
