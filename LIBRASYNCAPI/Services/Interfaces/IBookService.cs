namespace LIBRASYNCAPI.Services.Interfaces
{
    using LIBRASYNCAPI.Entity;

    public interface IBookService
    {
        Task<IEnumerable<Book>> GetBooksAsync();

        Task<Book> GetByIdAsync(int id);

        Task AddAsync(Book book);

        Task UpdateAsync(Book newBook);

        Task DeleteAsync(int id);
    }
}
