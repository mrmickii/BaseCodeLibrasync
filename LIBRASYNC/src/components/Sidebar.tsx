import { SidebarData } from "../data/SidebarData"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-56 h-screen bg-white shadow-md flex flex-col border">
      <ul className="py-5">
        {SidebarData.map((item, index) => {
          return(
            <li key={index}>
              <div 
                className="p-3 hover:bg-zinc-100 hover:cursor-pointer text-sm focus:bg-black" 
                onClick={() => navigate(item.path)}>
                  {item.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}