import React from "react";

function WeatherDetails({ data, unit }) {
  const { main, wind, weather } = data;
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="weather-details">
      <h2>Current Weather</h2>
      <p>Temperature: {main.temp} {temperatureUnit}</p>
      <p>Min Temperature: {main.temp_min} {temperatureUnit}</p>
      <p>Max Temperature: {main.temp_max} {temperatureUnit}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Wind Direction: {wind.deg}°</p>
      <p>Description: {weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}

export default WeatherDetails;
