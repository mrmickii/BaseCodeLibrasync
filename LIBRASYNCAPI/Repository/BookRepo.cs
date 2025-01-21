namespace LIBRASYNCAPI.Repository
{
    using LIBRASYNCAPI.Data;
    using LIBRASYNCAPI.Entity;
    using LIBRASYNCAPI.Repository.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class BookRepo : IBookRepo
    {
        private readonly AppDbContext _context;

        public BookRepo(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Book>> GetAll()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book> GetById(int id)
        {
            return await _context.Books.FindAsync(id);
        }

        public async Task Add(Book book)
        {
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
        }

        public async Task Update(Book newEntity)
        {
            _context.Books.Update(newEntity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var result = await _context.Books.FindAsync(id);

            if (result != null)
            {
                _context.Books.Remove(result);
            }
        }
    }
}
