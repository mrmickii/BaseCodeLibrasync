namespace LIBRASYNCAPI.Services
{
    using LIBRASYNCAPI.Model.DTO;
    using LIBRASYNCAPI.Model.Entity;
    using LIBRASYNCAPI.Repository.Interfaces;
    using LIBRASYNCAPI.Services.Interfaces;

    public class BookService : IBookService
    {
        private readonly IBookRepo _bookRepo;
        private readonly ILogger<BookService> _logger;

        public BookService(IBookRepo bookRepo, ILogger<BookService> logger)
        {
            _bookRepo = bookRepo;
            _logger = logger;
        }
        public async Task<IEnumerable<Book>> GetBooksAsync()
        {
            var result = await _bookRepo.GetAll();

            if (!result.Any()) 
            {
                _logger.LogError("No books available.");
            }

            return result;
        }

        public async Task<Book> GetByIdAsync(int id)
        {
            var result = await _bookRepo.GetById(id);

            if (result == null) 
            {
                throw new KeyNotFoundException("");
            }

            return await _bookRepo.GetById(id);
        }

        public async Task AddAsync(BookDTO model)
        {
            var existingBookTitle = (await _bookRepo.GetAll()).Any(bt => bt.Title.Equals(model.Title, StringComparison.OrdinalIgnoreCase));

            if (existingBookTitle) 
            {
                throw new InvalidOperationException($"Book with the name `{model.Title}` already exists.");
            }

            var newBook = new Book
            {
                BookId = model.BookId,
                Title = model.Title,
                Genre = model.Genre,
                Author = model.Author,
                Isbn = model.Isbn,
                PublicationDate = model.PublicationDate,
                DateUpdated = DateTime.Now,
                UpdatedBy = "Admin",
                Status = true
            };

            await _bookRepo.Add(newBook);
        }

        public async Task UpdateAsync(BookDTO model)
        {
            var existingBook = await _bookRepo.GetById(model.Id);

            if(existingBook == null)
            {
                throw new Exception("Book not found");
            }

            existingBook.Title = model.Title;
            existingBook.Genre = model.Genre;
            existingBook.Author = model.Author;
            existingBook.Isbn = model.Isbn;
            existingBook.PublicationDate = model.PublicationDate;
            existingBook.DateUpdated = DateTime.Now;
            existingBook.UpdatedBy = model.UpdatedBy;
            existingBook.Status = model.Status;

            await _bookRepo.Update(existingBook);
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _bookRepo.GetById(id);

            if (result != null)
            {
                await _bookRepo.Delete(id);
            }
        }
    }
}
