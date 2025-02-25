import { CustomButtonTypes } from "../../types/CustomButtonTypes"


export const CustomButton = ({title} : CustomButtonTypes) => {
  return(
    <div className="flex justify-center items-center border border-cyan-300 w-24 h-7 font-semibold rounded-md text-cyan-300 bg-white text-sm cursor-pointer">
      <p>{title}</p>
    </div>
  )
}