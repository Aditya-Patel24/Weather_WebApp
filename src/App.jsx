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
    <h1 style={{fontFamily: " system-ui"}}>Weather app made by<span style={{color:"#61dafb",fontFamily: "'Rubik Scribble', system-ui"}}> Aditya Patel</span></h1>
    <Input onClick={weather.fetchData}/>
    <Button onClick={weather.fetchData} value="Search"/>
    <Weather/>
    </div>
  </>
  )
}

export default App
  