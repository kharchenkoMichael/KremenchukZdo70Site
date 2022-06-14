﻿using KremenchukZdo70Site.Domain;
using KremenchukZdo70Site.Infrastructure;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

namespace KremenchukZdo70Site
{
    public static class ServicesInjector
    {
        public static void ConfigureServices(this IServiceCollection services)
        {
            services.AddScoped<IEmployeeService, EmployeeService>();
        }

        public static void ConfigureDbContext(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config[Constants.DbConnectionKeyName]!;
            services.AddDbContext<Zdo70DbContext>(
                (opt) =>
                {
                    opt.UseSqlServer(connectionString);
                },
                ServiceLifetime.Transient,
                ServiceLifetime.Transient);
        }
    }
}