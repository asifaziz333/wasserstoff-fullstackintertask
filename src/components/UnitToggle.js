import React from "react";

function UnitToggle({ unit, setUnit }) {
  return (
    <div className="unit-toggle">
      <label>
        <input
          type="radio"
          value="metric"
          checked={unit === "metric"}
          onChange={() => setUnit("metric")}
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          value="imperial"
          checked={unit === "imperial"}
          onChange={() => setUnit("imperial")}
        />
        Fahrenheit
      </label>
    </div>
  );
}

export default UnitToggle;
