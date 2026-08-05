import { createContext, useContext, useState, useEffect } from "react";

export const WeatherContext = createContext(null);

// custom hook
export const useWeather = () => {
  const weather = useContext(WeatherContext);
  return weather;
};

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const [lastSearchCity, setLastSearchCity] = useState(
    () => localStorage.getItem("lastSearchCity") || "",
  );
  const [recentSearches, setRecentSearches] = useState(
    () => JSON.parse(localStorage.getItem("recentSearches")) || [],
  );

  useEffect(() => {
    localStorage.setItem("lastSearchCity", lastSearchCity);
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [lastSearchCity, recentSearches]);

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
