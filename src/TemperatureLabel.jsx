import React from 'react'
import "./TemperatureLabel.css";
const TemperatureLabel = ({weatherToday}) => {
const {currentTemperature,description,image}=weatherToday;
console.log(weatherToday)
    return ( <div className="tempLabel">
<div className="currentTemperature">
        <h2>{currentTemperature} °C</h2>
      <img src={image} alt="" />
</div>
        <h4>{description}</h4>
    </div> );
}
 
export default TemperatureLabel;