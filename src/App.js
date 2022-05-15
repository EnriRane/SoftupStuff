import React from 'react'
import { useEffect, useState } from "react";
import TemperatureDescription from "./TemperatureDescription";
import TemperatureLabel from "./TemperatureLabel";
import allWeathers from "./weather.json";
import "./App.css";
const App = () => {
    
    const[weatherToday,setWeather]= useState({});
    const getRandomNumber=()=>Math.floor(Math.random()*3);

    useEffect(()=>{
        const getRandomWeather=()=>{
           const randomWeather= allWeathers.weather[getRandomNumber()];
          return randomWeather[Object.keys(randomWeather)[0]]
        }
        setWeather(getRandomWeather());
    }, [weatherToday]);


    return (
         <div className="wrapper">
        <TemperatureLabel weatherToday={weatherToday}/>
        <TemperatureDescription weatherToday={weatherToday}/>

    </div>)
}

export default App;