import React from 'react'
import { useWeather } from '../context/Weathercontext'
const Input = (props) => {
  const weather = useWeather();
  return (
    <div>
      <input id="input-enter" className="input-field" value={weather.searchCity} placeholder="Enter your City" onChange={(e)=> weather.setSearchCity(e.target.value)}/>
    </div>
  )
}

export default Input
