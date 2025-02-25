const BASE_URL = "http://localhost:44391/api";

export const BookApi = {
  getBook: `${BASE_URL}/Book`,
  getBookById: (id: number) => `${BASE_URL}/Book/${id}`,
  addBook: `${BASE_URL}/create`,
  deleteBook: (id: number) => `${BASE_URL}/delete/${id}`,
}