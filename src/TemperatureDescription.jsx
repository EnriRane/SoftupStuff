import React from "react";
import "./TemeperatureDescription.css";

const TemperatureDescription = ({ image, currentTemperature, description }) => {
  return (
    <div className="temperatureDescription">
      <div>
        <h1>{currentTemperature}°C</h1>
        <img src={image} alt="weatherPhoto" />
      </div>
      <h3> {description}</h3>
    </div>
  );
};

export default TemperatureDescription;
