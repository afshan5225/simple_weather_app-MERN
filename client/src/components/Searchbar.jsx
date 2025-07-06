import React from 'react'
import { useAPPContext } from '../context/Appcontext'




const Searchbar = () => {
  const{city,setCity} = useAPPContext()
  return (
    <>
    <input onChange={(e)=>{setCity(e.target.value)}} value={city} className='bg-amber-50 outline-none mt-4 rounded-2xl text-center w-full max-w-xs sm:w-72 md:w-80 text-yellow-800' type="text" />
    
    
    </>
  )
}

export default Searchbar