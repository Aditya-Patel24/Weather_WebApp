import { useState } from 'react'
import './App.css'
import Weather from './Component/Weather'
import Input from './Component/Input'
import Button from './Component/Button'
import { useWeather } from './context/Weathercontext'
function App() {
  const weather =useWeather();
  return (
  <>
    <div className='app-container'>
    <h1>Weather app made by Aditya Patel</h1>
    <Input />
    <Button onClick={weather.fetchData} value="Search"/>
    <Weather/>
    </div>
  </>
  )
}

export default App
