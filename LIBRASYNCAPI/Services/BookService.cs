namespace LIBRASYNCAPI.Services
{
    using LIBRASYNCAPI.Entity;
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

        public async Task AddAsync(Book book)
        {
            var existingBookTitle = (await _bookRepo.GetAll()).Any(bt => bt.Title.Equals(book.Title, StringComparison.OrdinalIgnoreCase));
            var existingBookId = (await _bookRepo.GetAll()).Any(bid => bid.Id == book.Id);

            if (existingBookId)
            {
                throw new InvalidOperationException($"Book with id `{book.BookId}` arealdy exists.");
            }

            if (existingBookTitle) 
            {
                throw new InvalidOperationException($"Book with the name `{book.Title}` already exists.");
            }

            await _bookRepo.Add(book);
        }

        public Task UpdateAsync(Book newBook)
        {
            return _bookRepo.Update(newBook);
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
