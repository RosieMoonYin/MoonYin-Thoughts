using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class ThoughtContext : DbContext
    {
        public ThoughtContext(DbContextOptions<ThoughtContext> options)
            : base(options)
        { }
        public DbSet<Thought> ThoughtCollection { get; set; }

    } 
}