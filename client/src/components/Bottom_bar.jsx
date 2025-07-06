import React from 'react'
import { useAPPContext } from '../context/Appcontext'

const Bottom_bar = () => {

  const{ismood} = useAPPContext();
  const {weather} = useAPPContext();

    if (!ismood) return null;
    return (
    <div className='flex items-center justify-center w-full mt-10'>
  <div className="flex flex-row justify-between w-full max-w-2xl px-4">
    <div className="text-white text-lg font-inter">
      <p>
        <span className='text-5xl opacity-50'>🌬️</span>
        <span className="ml-2">{weather.wind.speed} <span className='text-sm'>km/h</span></span>
      </p>
    </div>
    <div className="text-white text-lg font-inter">
      <p>
        <span className='text-5xl opacity-50'>💧</span>
        <span className="ml-2">{weather?.main?.humidity}<span className='text-sm'>%</span></span>
      </p>
    </div>
  </div>
</div>

  )
}

export default Bottom_bar