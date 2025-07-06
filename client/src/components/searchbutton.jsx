import React from 'react'
import assets from '../assets/assets'


const Searchbutton = () => {
  return (
    
        <button type="submit" className='hover:scale-115   mt-4 cursor-pointer active:brightness-0 active:invert transition'><img className="w-6 h-6  " src={assets.search_icon} /></button>
        
  )
}

export default Searchbutton