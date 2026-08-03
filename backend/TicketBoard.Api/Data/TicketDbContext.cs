namespace TicketBoard.Api.Data;

using Microsoft.EntityFrameworkCore;
using TicketBoard.Api.Models;

public class TicketDbContext : DbContext
{
    public TicketDbContext(DbContextOptions<TicketDbContext> options) : base(options)
    {
    }

    public DbSet<Ticket> Tickets { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed initial tickets
        modelBuilder.Entity<Ticket>().HasData(
            new Ticket { Id = 1, Title = "Payment Failed", Category = "Payment", Priority = "High" },
            new Ticket { Id = 2, Title = "Unable to Login", Category = "Authentication", Priority = "Medium" },
            new Ticket { Id = 3, Title = "Page Not Loading", Category = "Technical", Priority = "Low" },
            new Ticket { Id = 4, Title = "Database Timeout", Category = "Database", Priority = "High" },
            new Ticket { Id = 5, Title = "Password Reset Link Expired", Category = "Authentication", Priority = "Medium" },
            new Ticket { Id = 6, Title = "UI Alignment Issue on Mobile", Category = "UI/UX", Priority = "Low" },
            new Ticket { Id = 7, Title = "Server Error 500 on Checkout", Category = "Payment", Priority = "High" },
            new Ticket { Id = 8, Title = "Missing Localization Strings", Category = "Content", Priority = "Low" }
        );
    }
}
