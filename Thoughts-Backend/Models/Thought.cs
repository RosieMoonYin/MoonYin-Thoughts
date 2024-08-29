using Microsoft.EntityFrameworkCore;
namespace TodoApi.Models;


public class Thought
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Content { get; set; }
    public string? Category { get; set; }
    public bool IsComplete { get; set; }

    public string? Secret { get; set; }
}
