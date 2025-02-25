import { Header } from '../components/Customs/Header'
import { Sidebar } from '../components/Customs/Sidebar'
import { LocationBar } from '../components/Customs/LocationBar'
import SendIcon from "../assets/send.svg"

export const BookCatalog = () => {
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
          
          <table>
            <thead>
              <tr>
              </tr>
            </thead>

            <tbody>
              <tr>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) 
}