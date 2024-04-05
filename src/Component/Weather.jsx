import React, { useState } from "react";
import { useWeather } from "../context/Weathercontext";
const Weather = () => {
  const weather = useWeather();
  console.log(weather);
  if (!weather.data) {
    return (
      <div className="out-weather">
        <div className="weather-container">
          <img src="src\assets\weathergif.gif" width="200px" alt="icon" />
          <h2>Enter you location to see weather</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="out-weather">
        <div className="weather-container">
          <img src={weather?.data?.current?.condition?.icon} alt="icon" />
          <p>{weather?.data?.current?.condition?.text}</p>
          <h2>{weather?.data?.current?.temp_c}° C</h2>
          <h5>
            {weather?.data?.location?.name}, {weather?.data?.location?.region},{" "}
            {weather?.data?.location?.country}
          </h5>
          <h6>{weather?.data?.current?.last_updated}</h6>
        </div>
      </div>
    </>
  );
};

export default Weather;
