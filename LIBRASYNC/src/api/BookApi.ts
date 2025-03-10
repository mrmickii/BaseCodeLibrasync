const BASE_URL = "http://localhost:5285/api";

export const BookApi = {
  getBook: `${BASE_URL}/book`,
  getBookById: (id: number) => `${BASE_URL}/book/${id}`,
  addBook: `${BASE_URL}/book/create`,
  deleteBook: (id: number) => `${BASE_URL}/book/delete/${id}`,
};