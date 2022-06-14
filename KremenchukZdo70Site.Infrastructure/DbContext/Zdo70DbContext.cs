using KremenchukZdo70Site.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site.Infrastructure
{
    public partial class Zdo70DbContext : DbContext
    {
        public Zdo70DbContext()
        {
        }

        public Zdo70DbContext(DbContextOptions<Zdo70DbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employee { get; set; } = null!;
        public virtual DbSet<ContactsData> ContactsData { get; set; } = null!;
    }
}
