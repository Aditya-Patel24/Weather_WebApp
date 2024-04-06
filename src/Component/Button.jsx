import React, {useState} from 'react'
import { useWeather } from '../context/Weathercontext'
const Button = (props) => {
  const weather = useWeather();
  const check=()=>{
    if(weather.searchCity !== ""){
    return true;
  }
return false;}
console.log(check);
  return (
    <div >
    {check() ? ( <><button className='btn' type="button" onClick={props.onClick}>{props.value}</button> </>):(<> <button className='btn' type="button" onClick={props.onClick} disabled>{props.value}</button></>)}
    </div>
  )
}

export default Button
