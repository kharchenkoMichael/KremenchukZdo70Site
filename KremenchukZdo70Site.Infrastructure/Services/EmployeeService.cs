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

        private async Task<(int? TotalCount, IList<CollectiveItemResponse> Data)> SelectCollectiveAsync(CollectiveRequest request)
        {
            var resultQuery = _context
                .Employee
                .AsNoTracking()
                .Select(item => new CollectiveItemResponse
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    SecondName = item.SecondName,
                    LastName = item.LastName,
                    SmallProfileUrl = item.SmallImageUrl,
                    FullProfileUrl = item.FullImageUrl,
                    JobTitleNames = item.EmployeeToJobTitles.Select(etj => etj.JobTitle.Name)
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
