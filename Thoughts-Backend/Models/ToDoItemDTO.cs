namespace TodoApi.Models
{
    public class ThoughtDTO
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }

        public string? ImageUrl { get; set; }

        public string? Category { get; set; }
        public bool IsComplete { get; set; }
    }
}