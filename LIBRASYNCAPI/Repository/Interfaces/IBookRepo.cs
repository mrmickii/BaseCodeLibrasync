namespace LIBRASYNCAPI.Repository.Interfaces
{
    using LIBRASYNCAPI.Model.Entity;

    public interface IBookRepo
    {
        Task<IEnumerable<Book>> GetAll();

        Task<Book> GetById(int id);

        Task Add(Book book);

        Task Update(Book newEntity);

        Task Delete(int id);
    }
}
