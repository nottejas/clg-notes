import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("/weather.json"); // Fetch local JSON file
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
    <div className="max-w-md mx-auto p-6 bg-blue-100 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Weather Information</h2>

      {error && <p className="text-red-500">{error}</p>}

      
      <select
        className="mb-4 p-2 border rounded"
        value={selectedCity}
        onChange={handleCityChange}
      >
        {weatherData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

     
      {weather ? (
        <div>
          <p className="text-lg font-semibold">City: {weather.name}</p>
          <p className="text-lg font-semibold">Temperature: {weather.temperature}°C</p>
          <p className="text-lg">Condition: {weather.condition}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherApp;
