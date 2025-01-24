namespace LIBRASYNCAPI.Entity
{
    using System.ComponentModel.DataAnnotations;

    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string BookId { get; set; }

        [Required]
        public required string Title { get; set; }

        [Required]
        public required string Author { get; set; }

        [Required]
        public DateTime PublicationDate { get; set; }

        [Required]
        public required string Language { get; set; }

        [Required]
        public required string CatergoryId { get; set; }

        [Required]
        public required bool Status { get; set; }

    }
}
