import { useState } from "react"
import profile from "../assets/react.svg" 
import { DropdownMenuData } from "../data/DropdownMenuData";

export const Header = () => {
  const [isOpen, setOpen] = useState<Boolean>(false);

  const toogleOpenMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <header className="h-14 flex justify-between items-center px-10 bg-white shadow-md">
      <div className="flex justify-center items-center ">
        <img src={profile} alt="" className="border rounded-full mr-3"/>
        <h1 className="text-sm font-bold">LIBRASYNC</h1>
      </div>
      <div className="flex justify-center ">
        <div className="text-sm mr-2 border-r border-black pr-2">
          <div className="font-semibold">Carlo Ramonida Garcia</div>
          <div className="text-right">Admin</div>
        </div>
        <div title="Open Settings" className="cursor-pointer flex items-center ">
            <div className="" onClick= {toogleOpenMenu}>
              {isOpen ? (
                <div className="flex"> 
                  <div className="flex w-44 bg-white border absolute top-14 text-sm right-10">
                    <ul>
                      {DropdownMenuData.map((item, index) => {
                        return(
                          <li key={index} className="hover:bg-zinc-100 p-4 w-44">{item.title}</li>
                          )})}
                    </ul>
                  </div>
                  <img src={profile} className="border rounded-full"/>
                </div>
              ) : (
                <div>
                  <img src={profile} className="border rounded-full"/>
                </div>
              )}
            </div>
        </div>
      </div>
    </header>
  )
}