import React, { useEffect } from 'react'
import assets from '../assets/assets'
import { useAPPContext } from '../context/Appcontext'



const Weather_Display = () => {

  const{ismood,setismood} = useAPPContext();
  const {weather} = useAPPContext();

  const mood = weather?.weather?.[0].main
  
  const display_mood = assets[mood]

    useEffect(() => {
    if (mood) {
      setismood(true);
    } else {
      setismood(false);
    }
  }, [mood, setismood]);

  if (!ismood) return null;

  
  
   return (
    <div className='flex  justify-center items-center p-5'>
        <div className='flex flex-col items-center gap-6'>
            <p className='font-inter text-white/50 text-bold text-5xl'>{weather?.name}</p>
           <div className='flex items-center justify-center'>
             <p className=" h-40 w-40  font-serif  text-9xl ">{display_mood}</p>
           </div>
        </div>
    </div>
  )
}

export default Weather_Display