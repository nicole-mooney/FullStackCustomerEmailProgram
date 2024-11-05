using CustomerEmailProgram.Business.Interfaces;
using CustomerEmailProgram.Business.Services;
using CustomerEmailProgram.Controllers;
using CustomerEmailProgram.Data.Interfaces;
using CustomerEmailProgram.Data.Services;
using CustomerEmailProgram.MockRepository.Interfaces;
using CustomerEmailProgram.MockRepository.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(connectionToAngular =>
{
    connectionToAngular.AddPolicy(name: "CorsPolicy", builder =>
    {
        builder.WithOrigins(["http://localhost:4200", "https://localhost:4200"])
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
});

builder.Services.AddTransient<IBLCustomerEmails, BLCustomerEmails>();
builder.Services.AddTransient<IDLCustomerEmails, DLCustomerEmails>();
builder.Services.AddTransient<IEmailRepository, EmailRepository>();
builder.Services.AddTransient<ICustomerRepository, CustomerRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("CorsPolicy");

app.MapControllers();

app.Run();
