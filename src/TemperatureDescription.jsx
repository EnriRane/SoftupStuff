import React from 'react'
import "./TemperatureDescription.css";
const TemperatureDescription = ({weatherToday}) => {
    const {highTemperature,lowTemperature,windSpeed}=weatherToday
    return ( <div className="temperatureDescription">
<div>
    <h5>Lowest Temperature</h5>
    <h4>{lowTemperature}°C</h4>
</div>
<div>
    <h5>Highest Temperature</h5>
    <h4>{highTemperature} °C</h4>
</div>
<div>

    <h5><i class="fas fa-wind"></i>Wind Speed</h5>
    <h4>{windSpeed} m/s</h4>
</div>
    </div> );
}
 
export default TemperatureDescription;