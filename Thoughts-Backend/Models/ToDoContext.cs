using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class ThoughtContext(DbContextOptions<ThoughtContext> options) : DbContext(options)
    {
        public required DbSet<Thought> ThoughtCollection { get; set; }

    } 
}