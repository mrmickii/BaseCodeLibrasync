namespace LIBRASYNCAPI.Services.Interfaces
{
    using LIBRASYNCAPI.Model.DTO;
    using LIBRASYNCAPI.Model.Entity;

    public interface IBookService
    {
        Task<IEnumerable<Book>> GetBooksAsync();

        Task<Book> GetByIdAsync(int id);

        Task AddAsync(BookDTO model);

        Task UpdateAsync(BookDTO model);

        Task DeleteAsync(int id);
    }
}
