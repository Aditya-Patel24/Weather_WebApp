import React, { useState } from "react";
import { useWeather } from "../context/Weathercontext";
import sunnyGif from "../assets/sunny.gif";
import rainyGif from "../assets/rainy.gif";
const Weather = () => {
  const weather = useWeather();
  console.log(weather);
  const getWeatherGif = () => {
    if (weather?.data?.current?.condition?.text.includes("Rain")) {
      return rainyGif;
    } else if (weather?.data?.current?.condition?.text.includes("Sunny")) {
      return sunnyGif;
    } else {
      return "src\\assets\\weathergif.gif"; // default gif
    }
  };
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
  if (!weather.data || weather.data.error) {
    return (
      <div className="out-weather">
        <div className="weather-container">
          <img src="src\\assets\\weathergif.gif" width="200px" alt="icon" />
          <h2>Sorry, data is not available for the entered location.</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="out-weather">
        <div className="weather-container"  style={{ backgroundImage: `url(${getWeatherGif()})` }}>
          <img src={weather?.data?.current?.condition?.icon} alt="icon" />
          <p>{weather?.data?.current?.condition?.text}</p>
          <h2>{weather?.data?.current?.temp_c}° C</h2>
          <h5>
            {weather?.data?.location?.name}, {weather?.data?.location?.region},{" "}
            {weather?.data?.location?.country}
          </h5>
          <h5>{weather?.data?.current?.last_updated}</h5>
          <p>Wind Speed: {weather?.data?.current?.wind_kph} kph</p>
          <p>Humidity: {weather?.data?.current?.humidity}%</p>
          <p>UV Index: {weather?.data?.current?.uv}</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
