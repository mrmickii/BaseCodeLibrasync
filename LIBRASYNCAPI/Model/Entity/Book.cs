namespace LIBRASYNCAPI.Model.Entity
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
        public required string Genre { get; set; }

        [Required]
        public required string Author { get; set; }

        [Required]
        public required int Isbn { get; set; }

        [Required]
        public required DateOnly PublicationDate { get; set; }

        [Required]
        public required DateTime DateUpdated { get; set; }

        [Required]
        public required string UpdatedBy { get; set; }

        [Required]
        public required bool Status { get; set; }

    }
}
