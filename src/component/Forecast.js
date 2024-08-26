import React from "react";

function Forecast({ data, unit }) {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {data.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Avg Temperature: {day.main.temp} {temperatureUnit}</p>
            <p>{day.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
