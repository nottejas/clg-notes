import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("/weather.json");
        if (!response.ok) throw new Error("Failed to load weather data.");
        const data = await response.json();
        setWeatherData(data.cities);
        updateWeather(data.cities, selectedCity);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  const updateWeather = (cities, cityName) => {
    const cityWeather = cities.find((city) => city.name === cityName);
    setWeather(cityWeather);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    updateWeather(weatherData, event.target.value);
  };

  return (
    <div>
      <h2>Weather Information</h2>

      {error && <p>{error}</p>}

      <select value={selectedCity} onChange={handleCityChange}>
        {weatherData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {weather ? (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherApp;
