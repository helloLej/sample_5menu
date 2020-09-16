import React, {useState} from 'react'
import CityMenu from './CityMenu'
import WeatherContainer from '../../container/WeatherContainer'
import './style.css'

function Async() {
  const [focusedCity, setFocusedCity] = useState('Seoul')
  
  const cities = ['Seoul', 'Tokyo', 'Beijing', 'Toronto']

  return (
    <>
      <CityMenu
        cities={cities}
        focusedCity={focusedCity}
        setFocusedCity={setFocusedCity}/>
      <WeatherContainer focusedCity={focusedCity}/>
    </>
  )
}

export default Async
