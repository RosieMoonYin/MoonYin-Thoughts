using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThoughtsController : ControllerBase
    {

    private static ThoughtDTO ItemToDTO(Thought thought) =>
        new ThoughtDTO
    {
        Id = thought.Id,
        Title = thought.Title,
        Content = thought.Content,
        Category = thought.Category, 
        IsComplete = thought.IsComplete
    };

        private readonly ThoughtContext _context;

        public ThoughtsController(ThoughtContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ThoughtDTO>>> GetTodoItems()
        {
            return await _context.ThoughtCollection
                .Select(x => ItemToDTO(x))
                .ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ThoughtDTO>> GetThought(int id)
        {
            var thought = await _context.ThoughtCollection.FindAsync(id);

            if (thought == null)
            {
                return NotFound();
            }

            return ItemToDTO(thought);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(int id, ThoughtDTO thoughtDTO)
        {
            if (id != thoughtDTO.Id)
            {
                return BadRequest();
            }

            var thoughtItem = await _context.ThoughtCollection.FindAsync(id);
            if (thoughtItem == null)
            {
                return NotFound();
            }

            thoughtItem.Title = thoughtDTO.Title;
            thoughtItem.Content = thoughtDTO.Content;  
            thoughtItem.Category = thoughtDTO.Category;  
            thoughtItem.IsComplete = thoughtDTO.IsComplete;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!thoughtItemExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<ThoughtDTO>> CreateThought(ThoughtDTO thoughtDTO)
        {
            var thoughtItem = new Thought
            {
                IsComplete = thoughtDTO.IsComplete,
                Title = thoughtDTO.Title,
                Content = thoughtDTO.Content,
                Category = thoughtDTO.Category 
            };

            _context.ThoughtCollection.Add(thoughtItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetThought),
                new { id = thoughtItem.Id },
                ItemToDTO(thoughtItem));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(int id)
        {
            var thoughtToDelete = await _context.ThoughtCollection.FindAsync(id);
            if (thoughtToDelete == null)
            {
                return NotFound();
            }

            _context.ThoughtCollection.Remove(thoughtToDelete);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool thoughtItemExists(int id)
        {
            return _context.ThoughtCollection.Any(e => e.Id == id);
        }
    }
}