using KremenchukZdo70Site.Domain;
using KremenchukZdo70Site.Domain.Common;
using KremenchukZdo70Site.Infrastructure;
using KremenchukZdo70Site.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace KremenchukZdo70Site
{
    public static class ServicesInjector
    {
        public static void ConfigureServices(this IServiceCollection services)
        {
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<IContactsDataService, ContactsDataService>();
            services.AddScoped<IInformationOpenService, InformationOpenService>();
            services.AddScoped<IRegulatoryFrameworkService, RegulatoryFrameworkService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IContentService, ContentService>();
            services.AddScoped<IJobTitleService, JobTitleService>();
            services.AddScoped<IEmployeeToJobTitleService, EmployeeToJobTitleService>();
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
        public static void ConfigureAuthOptions(this IServiceCollection services, IConfiguration config)
        {
            var authOptions = config.GetSection("Auth");
            services.Configure<AuthOptions>(authOptions);
            var authOptionsValue = authOptions.Get<AuthOptions>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = authOptionsValue.Issuer,

                        ValidateAudience = true,
                        ValidAudience = authOptionsValue.Audience,

                        ValidateLifetime = true,

                        IssuerSigningKey = authOptionsValue.GetSymmetricSecurityKey(),
                        ValidateIssuerSigningKey = true,
                    };
                });
        }
    }
}
