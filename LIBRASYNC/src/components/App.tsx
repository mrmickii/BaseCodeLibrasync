import { useEffect, useState } from "react"
import { BookApi } from "../api/BookApi";
import { Book } from "../types/Book"

export const App = () => {
  const [data, setData] = useState<Book[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(BookApi.getBook);

      if(!response.ok){
        throw new Error(`Status: ${response.status}`);
      }
      const data:Book[] = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="">
        {data.map((book) => (
          <div className="text-sm text-green-500" key={book.id}>
            <h2>{book.bookId}</h2>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.publicationDate}</p>
            </div>
        ))}
      </div>
    </>
  )
}