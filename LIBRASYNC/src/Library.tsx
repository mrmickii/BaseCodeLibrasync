import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { BookApi } from './api/BookApi'
import { Book } from './types/Book'
import { TableHeader } from './data/TableHeader'
import { useEffect, useState } from 'react'
import { Table } from '@mui/material'

export const Library = () => {
  const [data, setData] = useState<Book[]>([]);

  const fetchData = async () => {
    try {
        const response = await fetch(BookApi.getBook);

        if(!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data:Book[] = await response.json();
        setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-zinc-100">
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='p-10 w-screen'>
          <p className='text-sm font-semibold'>Search for Books</p>
          <div className='input-container'> 
            <input type="search" placeholder='Search for books' className='text-sm border px-2 py-1' />
          </div>
          
          {/* BOOK TABLE DISPLAY */}
          <table className='table-auto w-full mt-5 border'>
            <thead className='text-sm font-semibold'>
              <tr>
                {TableHeader.map((item, index) => (
                  <th key={index}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody className='text-sm'>
              {data.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{new Date(book.publicationDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) 
}