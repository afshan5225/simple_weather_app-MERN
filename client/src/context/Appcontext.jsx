import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [weather,setWeather] = useState([]);
  const[ismood,setismood] = useState(false);

  const value = {
    city,
    setCity,
    weather,
    setWeather,
    ismood,
    setismood,
   
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAPPContext = () => useContext(AppContext);
