import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import UnitToggle from "./components/UnitToggle";
import "./styles.css";

const API_KEY = "11ddb6240f08458985ca788d6fb67b0a";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data.list);
      setError(null);
    } catch (error) {
      setError("City not found. Please try again.");
      setWeatherData(null);
      setForecastData([]);
    }
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={fetchWeatherData} />
      <UnitToggle unit={unit} setUnit={setUnit} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDetails data={weatherData} unit={unit} />}
      {forecastData.length > 0 && <Forecast data={forecastData} unit={unit} />}
    </div>
  );
}

export default App;
