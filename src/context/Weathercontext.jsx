import { createContext, useContext, useState } from "react";
import { fetchWeather } from "../api";
export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  const fetchData = async () => {
    const response = await fetchWeather(searchCity);
    setData(response);
  };
  return (
    <WeatherContext.Provider value={{ data, searchCity, setSearchCity, fetchData }}> {props.children}</WeatherContext.Provider>
  );
};
