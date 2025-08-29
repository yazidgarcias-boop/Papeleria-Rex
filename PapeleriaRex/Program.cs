using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRouting();

var app = builder.Build();

// Cargar index.html por defecto y permitir archivos estáticos
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
