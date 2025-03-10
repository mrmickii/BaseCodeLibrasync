import { Header } from '../components/Customs/Header'
import { Sidebar } from '../components/Customs/Sidebar'
import { LocationBar } from '../components/Customs/LocationBar'
import SendIcon from "../assets/send.svg"
import { useEffect, useState } from 'react'
import { Book } from '../types/Book'
import { BookApi } from '../api/BookApi'

export const BookCatalog = () => {
  const [book,setBook] = useState<Book[]>([]);

  const fetchBookData = async () => {
    try {
      const response = await fetch(BookApi.getBook);

      if(!response.ok){
        throw new Error("Failed to fetch book data");
      }
      const data = await response.json();
      setBook(data);
    } catch (error) {
      throw new Error(error + "Failed to fetch book data");
    }
  }

  useEffect(() => {
    fetchBookData();
  },[])

  return (
    <div className="bg-zinc-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="p-5 w-full">
          <LocationBar />
          <div className='flex w-full my-5 rounded-md justify-between'>
            <div className='flex gap-2 items-center'>
              <p className='text-sm text-gray-500 py-3'>Availability: </p>
              <select name="" id="" className='w-52 border-none h-8 rounded-md'></select>
              <button className='bg-cyan-400 px-3 py-1.5 rounded-md flex gap-2 ml-5'>
                <img src={SendIcon} alt="" />
                <p className='text-white text-sm'>Filter</p>
              </button>
            </div>
            <div className='flex items-center gap-3'>
              <p className='text-sm text-gray-500'>Search:</p>
              <input type="search" name="" id="" placeholder='Title' className='text-sm px-2 py-1 rounded-md'/>
            </div>
          </div>
          
          <div className='overflow-y-scroll h-80 shadow-md rounded-md'>
            <table className='border w-full'>
              <thead className="text-sm h-10 shadow-md">
                <tr>
                  <th className='border'>Book ID</th>
                  <th className='border'>Title</th>
                  <th className='border'>Genre</th>
                  <th className='border'>Author</th>
                  <th className='border'>Isbn</th>
                  <th className='border w-52'>Year Published</th>
                  <th className='border'>Status</th>
                </tr>
              </thead>

              <tbody className='text-sm bg-white text-center'>
                {book.length > 0 ? 
                  book.map(books => (
                    <tr className='h-10' key={books.id}>
                      <td>{books.bookId}</td>
                      <td>{books.title}</td>
                      <td>{books.genre}</td>
                      <td>{books.author}</td>
                      <td>{books.isbn}</td>
                      <td>{books.publicationDate}</td>
                      <td className={books.status ? "text-green-500" : "text-red-500"}>{books.status ? "Available": "Borrowed"}</td>
                    </tr>
                  ))
                  :
                  <tr>
                    <td colSpan={7} className='h-10'>
                      No Books Available
                    </td> 
                  </tr>
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  ) 
}