import { useLocation } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";
import ArrowRightSmall from "../../assets/arrow-right-small.svg"

export const LocationBar = () => {
  const location = useLocation();
  const toConvert = location.pathname.replace(/-/g, " ");

  const toTitleCase = (str: string) => {
    return str
      .split("/")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" / ");
  };

  const currentCategory = SidebarData.find((section) =>
    section.items.some((item) => item.path === location.pathname)
  );

  return (
    <div className="bg-white p-3 rounded-md shadow-[-5px_0px_0px_-2px_rgba(0,255,255,0.5)]">
      <p className="font-semibold">{toTitleCase(toConvert)}</p>
      <div className="flex text-sm items-center">
        {currentCategory && 
          <p className="text-sm text-cyan-300 font-semibold">
            {currentCategory.category}
          </p>
        }
        <img src={ArrowRightSmall} alt="" />
        <p>{toTitleCase(toConvert)}</p>
      </div>
    </div>
  );
};
