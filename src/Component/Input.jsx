import React from 'react'
import { useWeather } from '../context/Weathercontext'
import { fetchWeather } from '../api';
const Input = (props) => {
  const weather = useWeather();
  return (
    <div>
      <input id="input-enter" className="input-field" value={weather.searchCity} placeholder="Enter your City" onChange={(e)=> weather.setSearchCity(e.target.value)}  onKeyPress={(e) => {
    if (e.key == "Enter") {
      weather.fetchData();
    }
  }}/>
    </div>
  )

}

export default Input
