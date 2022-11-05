using KremenchukZdo70Site.Domain.Entities;
using KremenchukZdo70Site.Domain.Request;
using KremenchukZdo70Site.Domain.Response;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure.Services
{
    public class MenuService : IMenuService
    {
        private readonly Zdo70DbContext _context;

        public MenuService(Zdo70DbContext context)
        {
            _context = context;
        }

        public async Task<int> CtreateMenuAsync(MenuRequest request)
        {
            var menu = new Menu
            {
                ParentMenuId = request.ParentMenuId,
                Name = request.Name
            };

            await _context.Menu.AddAsync(menu);
            await _context.SaveChangesAsync();

            return menu.Id;
        }

        public async Task DeleteMenuAsync(int id)
        {
            var menu = await _context.Menu.FirstOrDefaultAsync(item => item.Id == id);

            if (menu == null)
            {
                throw new ArgumentException();
            }

            _context.Menu.Remove(menu);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<MenuResponse>> GetMenusAsync()
        {
            return await _context
            .Menu
            .Select(item => new MenuResponse
            {
                ParentMenuId = item.ParentMenuId,
                Id = item.Id,
                Name = item.Name
            })
            .ToListAsync();
        }

        public async Task<IEnumerable<MenuResponse>> GetParrentMenusAsync()
        {
            return await _context
            .Menu
            .Where(item => item.ParentMenuId == null)
            .Select(item => new MenuResponse
            {
                ParentMenuId = item.ParentMenuId,
                Id = item.Id,
                Name = item.Name
            })
            .ToListAsync();
        }

        public async Task<IEnumerable<MenuResponse>> GetSubMenusAsync(int menuId)
        {
            return await _context
            .Menu
            .Where(item => item.ParentMenuId == menuId)
            .Select(item => new MenuResponse
            {
                ParentMenuId = item.ParentMenuId,
                Id = item.Id,
                Name = item.Name
            })
            .ToListAsync();
        }

        public async Task<MenuResponse> UpdateMenuAsync(MenuRequest request)
        {
            var menu = await _context.Menu.FirstOrDefaultAsync(item => item.Id == request.Id);

            if (menu == null)
            {
                throw new ArgumentException();
            }

            menu.ParentMenuId = request.ParentMenuId;
            menu.Name = request.Name;

            _context.Menu.Update(menu);
            await _context.SaveChangesAsync();

            return new MenuResponse
            {
                Id = menu.Id,
                ParentMenuId = menu.ParentMenuId,
                Name = menu.Name,
            };
        }
    }
}
