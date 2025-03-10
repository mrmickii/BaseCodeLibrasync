import { Header } from "../components/Customs/Header"
import { Sidebar } from "../components/Customs/Sidebar"
import { LocationBar } from "../components/Customs/LocationBar"
import { ContainerBox } from "../components/Dashboard/ContainerBox"
import { CustomButton } from "../components/Customs/CustomButton"
import BookIcon from "../assets/books.svg"
import ArrowLeft from "../assets/arrow-left.svg"
import ArrowRight from "../assets/arrow-right.svg"
import UserIcon from "../assets/user.svg"
import { useEffect, useState } from "react"
import { Book } from "../types/Book"
import { BookApi } from "../api/BookApi"

export const Dashboard = () => {
  const [book, setBook] = useState<Book[]>([]);

  const fetchBookData = async () => {
    try {
      const response = await fetch(BookApi.getBook);

      if(!response.ok){
        throw new Error("Failed to fetch book data.");
      }

      const data = await response.json();
      setBook(data);
    } catch (error) {
      throw new Error(error + "Failed to fetch book data.");
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
          <div className="flex justify-between">
            <ContainerBox title={"Number of books"} count={book.length} icon={BookIcon} className="bg-cyan-100"/>
            <ContainerBox title={"Books Borrowed"} count={5} icon={ArrowLeft} className="bg-green-100"/>
            <ContainerBox title={"Book Returned"} count={5} icon={ArrowRight} className="bg-yellow-100"/>
            <ContainerBox title={"Users"} count={5} icon={UserIcon} className="bg-red-100"/>
          </div>
          <div className="flex gap-3 justify-end">
            <CustomButton title={"Today"}/>
            <CustomButton title={"This month"}/>
            <CustomButton title={"This year"}/>
          </div>
        </div> 
      </div>
    </div>
  )
}