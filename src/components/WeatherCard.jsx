import React from "react";
import styles from "../Weather.module.css";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className={styles.weatherCard}>
      <div className={styles.cardHeader}>
        <div>
          <h2 className={styles.cityName}>{weatherData.location.name}</h2>
          <p className={styles.country}>{weatherData.location.country}</p>
        </div>

        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
          className={styles.weatherIcon}
        />
      </div>

      <h1 className={styles.temperature}>{weatherData.current.temp_c}°C</h1>

      <p className={styles.condition}>{weatherData.current.condition.text}</p>

      <div className={styles.weatherInfo}>
        <div className={styles.infoBox}>
          <h4>Humidity</h4>
          <p>{weatherData.current.humidity}%</p>
        </div>

        <div className={styles.infoBox}>
          <h4>Wind Speed</h4>
          <p>{weatherData.current.wind_kph} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
