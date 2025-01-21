﻿namespace LIBRASYNCAPI.Data
{
    using LIBRASYNCAPI.Entity;
    using Microsoft.EntityFrameworkCore;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options) 
        { 
        }

        public DbSet<Book> Books { get; set; }
    }
}
