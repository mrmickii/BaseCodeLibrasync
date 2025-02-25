import { Header } from "../components/Customs/Header"
import { Sidebar } from "../components/Customs/Sidebar"
import { LocationBar } from "../components/Customs/LocationBar"
import { ContainerBox } from "../components/Dashboard/ContainerBox"
import { CustomButton } from "../components/Customs/CustomButton"
import BookIcon from "../assets/books.svg"
import ArrowLeft from "../assets/arrow-left.svg"
import ArrowRight from "../assets/arrow-right.svg"
import UserIcon from "../assets/user.svg"

export const Dashboard = () => {
  return (
    <div className="bg-zinc-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="p-5 w-full">
          <LocationBar />
          <div className="flex justify-between">
            <ContainerBox title={"Number of books"} count={5} icon={BookIcon} className="bg-cyan-100"/>
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