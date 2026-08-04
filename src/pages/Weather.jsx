import React, { useState } from "react";
import styles from "../Weather.module.css";
import SearchForm from "../components/SearchForm";
import ErrorMessage from "../components/ErrorMessage";
import { fetchWeatherData } from "../services/WeatherApi";
import WeatherCard from "../components/WeatherCard";
import NoData from "../components/NoData";
import Loader from "../components/Loader";
import { useWeather } from "../context/WeatherContext";

const Weather = () => {
  const {
    weatherData,
    setWeatherData,
    lastSearchCity,
    setLastSearchCity,
    recentSearches,
    setRecentSearches,
  } = useWeather();

  const [city, setCity] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      setErrorMessage("Please enter city name.");
      return;
    }

    try {
      setLoader(true);

      setErrorMessage("");

      const data = await fetchWeatherData(city);

      setWeatherData(data);

      setLastSearchCity(data.location.name);

      setRecentSearches((prev) => {
        const searchedCity = data.location.name;

        const updated = prev.filter((item) => item !== searchedCity);

        return [searchedCity, ...updated].slice(0, 5);
      });

      setCity("");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={styles.weatherPage}>
      <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />

      {city === "" && weatherData === null && errorMessage === "" && <NoData />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {loader ? <Loader /> : <WeatherCard weatherData={weatherData} />}

      {lastSearchCity && (
        <div className={styles.lastSearch}>
          📍<span>Last Search: </span>
          {lastSearchCity}
        </div>
      )}

      {recentSearches.length > 0 && (
        <div className={styles.recentSearches}>
          <span className={styles.recentTitle}>🕘 Recent Searches: </span>

          <div className={styles.cityList}>
            {recentSearches.map((searchedCity) => (
              <span key={searchedCity} className={styles.cityText}>
                [{searchedCity}]
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
