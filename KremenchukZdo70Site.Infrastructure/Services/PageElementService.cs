using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class PageElementService : IPageElementService
    {
        private readonly Zdo70DbContext _context;

        public PageElementService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<int> CtreateElementPageAsync(ElementPageRequest request)
        {
            var elementPage = new ElementPage
            {
                Href = request.Href,
                ImgUrl = request.ImgUrl,
                Text = request.Text,
                MenuId = request.MenuId 
            };

            await _context.ElementPage.AddAsync(elementPage);
            await _context.SaveChangesAsync();

            return elementPage.Id;
        }

        public async Task DeleteUpdateElementPageAsyncAsync(int id)
        {
            var element = await _context.ElementPage.FirstOrDefaultAsync(item => item.Id == id);

            if (element == null)
            {
                throw new ArgumentException();
            }

            _context.ElementPage.Remove(element);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<ElementPageResponse>> GetElementPageByMenuIdAsync(int menuId)
        {
            return await _context
            .ElementPage
            .Where(item => item.MenuId == menuId)
            .Select(item => new ElementPageResponse
            {
                Id = item.Id,
                Href = item.Href,
                ImgUrl = item.ImgUrl,
                Text = item.Text,
                MenuId = item.MenuId
            })
            .ToListAsync();
        }
        public async Task<ElementPageResponse> UpdateElementPageAsync(ElementPageRequest request)
        {
            var element = await _context.ElementPage.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (element == null)
            {
                throw new ArgumentException();
            }

            element.Href = request.Href;
            element.ImgUrl = request.ImgUrl;
            element.Text = request.Text;
            element.MenuId = request.MenuId;

            _context.ElementPage.Update(element);
            await _context.SaveChangesAsync();

            return new ElementPageResponse
            {
                Id = element.Id,
                Href = element.Href,
                ImgUrl = element.ImgUrl,
                Text = element.Text,
                MenuId = element.MenuId
            };
        }
    }
}
