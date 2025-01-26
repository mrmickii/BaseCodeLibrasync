import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import Clock from '../assets/clock.svg'
import LibrasyncLogo from '../assets/lib.png'
import { HomeData } from '../data/HomeData';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [date, setDate] = useState(new Date());
  const displayDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []) 

  return (
    <div className="bg-zinc-100">
          <Header />
          <div className='flex'>
            <Sidebar />
            <div className='p-10 w-screen flex flex-col gap-5'>
              <button className='bg-slate-700 text-white text-sm font-semibold p-3 rounded-lg w-36'>{HomeData.button}</button>
              <div className='shadow-lg bg-white flex flex-col p-5'>
                <div className='text-sm flex gap-2 mb-5'>
                  <p className='font-semibold'>Carlo R. Garcia</p>
                  <img src={Clock} />
                  <p className='text-sm text-gray-400'>{displayDate}</p>
                </div>
                <div className='flex flex-col text-gray-400 gap-8'>
                  <p className='text-2xl font-semibold text-black'>{HomeData.title}</p>
                  <div>
                    <p className='font-semibold'>{HomeData.greetingHead}</p>
                    <p className=''>{HomeData.greetingBody}</p>
                  </div>
                  <div>
                    <p className='font-semibold'>{HomeData.featureHead}</p>
                    <p className=''>{HomeData.featureSubHead}</p>
                    <li className=''>{HomeData.featuresBody[0]}</li>
                    <li className=''>{HomeData.featuresBody[1]}</li>
                    <li className=''>{HomeData.featuresBody[2]}</li>
                    <li className=''>{HomeData.featuresBody[3]}</li>
                  </div>
                  <div>
                    <p className='font-semibold'>{HomeData.warningHead}</p>
                    <p className=''>{HomeData.warningBody}</p>
                  </div>
                  <div>
                    <p className='font-semibold'>{HomeData.suggestionHead}</p>
                    <p className=''>{HomeData.suggestionBody}</p>
                  </div>
                  <div className='mt-36 flex flex-col items-center text-[10px]'>
                    <p className='font-semibold'>{HomeData.trademark}</p>
                    <p className=''>{HomeData.trademarkBody}</p>
                  </div>
                </div>
              </div>         
            </div>
          </div>
        </div>
  )
}