namespace LIBRASYNCAPI.Services
{
    using LIBRASYNCAPI.Entity;
    using LIBRASYNCAPI.Repository.Interfaces;
    using LIBRASYNCAPI.Services.Interfaces;

    public class BookService : IBookService
    {
        private readonly IBookRepo _bookRepo;

        public BookService(IBookRepo bookRepo)
        {
            _bookRepo = bookRepo;
        }
        public async Task<IEnumerable<Book>> GetBooksAsync()
        {
            return await _bookRepo.GetAll();
        }

        public async Task<Book> GetByIdAsync(int id)
        {
            return await _bookRepo.GetById(id);
        }

        public async Task AddAsync(Book book)
        {
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
