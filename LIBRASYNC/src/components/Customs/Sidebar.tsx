import { SidebarData } from "../../data/SidebarData";
import { SidebarFooter } from "../../data/SidebarData";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/admin.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-56 h-screen bg-white shadow-md flex flex-col border">
      <ul>
        {SidebarData.map((section, index) => (
          <li key={index}>
            <h3 className="p-5 uppercase text-xs font-semibold ">{section.category}</h3>
            <ul>
              {section.items.map((item, index) => {
                const isActive = location.pathname === item.path; // Check if active
                return (
                  <li key={index}>
                    <div 
                      className={`p-3 hover:bg-zinc-100 hover:cursor-pointer text-sm flex items-center ${
                        isActive ? "bg-cyan-200 text-black" : "" // Active styles
                      }`}
                      onClick={() => navigate(item.path)}
                    >
                      <div className="pl-5 w-full flex">
                        {item.icon && <img src={item.icon} alt={item.title} className="w-5 h-5 mr-2" />}
                        {item.title}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
      <div>
        {SidebarFooter.map((section, index) => (
          <div key={index} className="text-[10px] text-center">
            <div>{section.footer}</div>
            <div>{section.copyright}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
