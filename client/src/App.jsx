import React from "react";


import React_DOM from "react-dom";
import Searchbar from "./components/searchbar";
import Searchbutton from './components/searchbutton'
import Weather_Display from "./components/Weather_Display";
import Bottom_bar from "./components/Bottom_bar";
import axios from "axios";
import { useAPPContext } from "./context/Appcontext";


const App = () => {
  
  const api_key = '4ab3f855608b3be51e68312ee0b1dbeb'
  const {city} = useAPPContext();
  const{weather,setWeather} = useAPPContext();
 
  const handleSubmit = async(e)=>{
   

    e.preventDefault()

   try {
     const {data} =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    if(!data) return

    setWeather(data);
    
   } catch (error) {

    console.log(error.message)
    
   }  

  }
  return (
   <div className="flex items-center justify-center  bg-gradient-to-r from-blue-400 to-blue-900 min-h-screen">

    <div>
      <div className="bg-blue-500 border border-white/20 rounded-2xl shadow-blue-100 shadow-2xl p-8 sm:p-10 md:p-12 hover:scale-110 transition duration-300 ease-in-out ">
        <h1 className= "text-white font-inter font-bold text-4xl mb-2 text-center ">Weather App</h1>
      <p className="text-white/80 font-inter italic text-center">This is your weather companion</p>
      <div className="flex flex-col sm:flex-row  items-center justify-center mb-6">

        <form className="flex gap-2" onClick={handleSubmit}>
        <Searchbar/>
        <Searchbutton/>
        </form>
        
      </div>
          <Weather_Display/>
          <Bottom_bar/>
        
      </div>
      
    </div>
    
      
    </div>
   
  );
};
export default App;