import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext(null);

// custom hook
export const useWeather = () => {
  const weather = useContext(WeatherContext);
  return weather;
};

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [lastSearchCity, setLastSearchCity] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        lastSearchCity,
        setLastSearchCity,
        recentSearches,
        setRecentSearches,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
