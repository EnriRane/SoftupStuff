import React from "react";
import "./TemperatureComponent.css";

const TemperatureComponents = ({
  lowestTemperature,
  highestTemperature,
  windSpeed,
}) => {
  return (
    <div className="temmperatureComponents">
      <div>
        <h4>
          <i class="fa-solid fa-temperature-low"></i>&nbsp;Lowest Temperature
        </h4>
        <h5>{lowestTemperature}°C</h5>
      </div>
      <div>
        <h4>
          <i class="fa-solid fa-temperature-high"></i>&nbsp;Highest Temerature
        </h4>
        <h5>{highestTemperature}°C</h5>
      </div>
      <div>
        <h4>
          <i class="fa-solid fa-wind"></i>&nbsp;Wind speed
        </h4>
        <h5>{windSpeed} m/s</h5>
      </div>
    </div>
  );
};

export default TemperatureComponents;
