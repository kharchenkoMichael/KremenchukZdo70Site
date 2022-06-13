using Microsoft.OpenApi.Models;

namespace KremenchukZdo70Site
{
    public static class SwaggerConfig
    {
        public static void ConfigureSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
            });
        }
    }
}
