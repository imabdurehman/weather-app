const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`,
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  return data;
};
