﻿using KremenchukZdo70Site.Domain.Entities;
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
        public virtual DbSet<Content> Content { get; set; } = null!;
        public virtual DbSet<Menu> Menu { get; set; } = null!;
        public virtual DbSet<ElementPage> ElementPage { get; set; } = null!;
        public virtual DbSet<JobTitle> JobTitle { get; set; } = null!;
        public virtual DbSet<EmployeeToJobTitle> EmployeeToJobTitle { get; set; } = null!;

        public virtual DbSet<ContactsData> ContactsData { get; set; } = null!;

        public virtual DbSet<InformationOpen> InformationOpen { get; set; } = null!;

        public virtual DbSet<RegulatoryFramework> RegulatoryFramework { get; set; } = null!;
        public virtual DbSet<User> User { get; set; } = null!;
    }
}
