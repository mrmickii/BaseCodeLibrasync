namespace LIBRASYNCAPI.Controllers
{
    using LIBRASYNCAPI.Entity;
    using LIBRASYNCAPI.Services.Interfaces;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [EnableCors]
    [Route(Constants.BookConstants.HttpRoutes.BASE)]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            var result = await _bookService.GetBooksAsync();
            return Ok(result);
        }

        [HttpGet(Constants.BookConstants.HttpRoutes.GETBYID)]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _bookService.GetByIdAsync(id);
            return Ok(result);
        }

        [HttpPost(Constants.BookConstants.HttpRoutes.CREATE)]
        public async Task<IActionResult> Add([FromBody]Book book) 
        { 
            await _bookService.AddAsync(book);
            return Ok();
        }

        [HttpPut(Constants.BookConstants.HttpRoutes.UPDATE)]
        public async Task<IActionResult> Update([FromBody]Book newBook, int id)
        {
            if (newBook.Id != id) 
            { 
                return BadRequest();
            }

            await _bookService.UpdateAsync(newBook);
            return Ok();
        }

        [HttpDelete(Constants.BookConstants.HttpRoutes.DELETE)]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _bookService.GetByIdAsync(id);

            if (result == null)
            {
                return NotFound();
            }

            await _bookService.DeleteAsync(id);
            return Ok();
        }
    }
}
