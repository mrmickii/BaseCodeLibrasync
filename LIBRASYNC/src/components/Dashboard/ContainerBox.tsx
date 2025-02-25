import { ContainerBoxTypes } from "../../types/ContainerBoxTypes"

export const ContainerBox = ({title, count, icon, className}: ContainerBoxTypes) =>{
  return(
    <div className="flex justify-between gap-5 bg-white shadow-sm p-5 my-5 rounded-md w-96">
      <div className="flex flex-col">
        <h3 className="font-semibold">{title}</h3>
        <p>{count}</p>
      </div>
      <div className={`w-12 rounded-md flex justify-center items-center ${className}`}>
        {icon && <img src={icon} alt={title}/>}
      </div>
    </div>
  )
}