import React from "react";
import Header from "./Header";
import TemperatureDescription from "./TemperatureDescription";
import TemperatureComponents from "./TemperatureComponents";
import allWeathers from "./weather.json";
import "./App.css";

const App = () => {
  const randomWeather = allWeathers.weather[Math.floor(Math.random() * 3)];

  return (
    <div className="wrapper">
      <Header />
      <TemperatureDescription
        description={randomWeather.description}
        currentTemperature={randomWeather.currentTemperature}
        image={randomWeather.image}
      />
      <TemperatureComponents
        lowestTemperature={randomWeather.lowTemperature}
        highestTemperature={randomWeather.highTemperature}
        windSpeed={randomWeather.windSpeed}
      />
    </div>
  );
};
export default App;
