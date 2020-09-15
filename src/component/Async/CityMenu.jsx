import React from 'react'

function CityMenu({cities, focusedCity, setFocusedCity}) {
  const activeCity = (city) => city === focusedCity ? 'active' : ''

  const saerchWeather = city => {
    setFocusedCity(city)
  }

  return (
    <>
      {cities.map(city => 
        <button 
          className={`async_btn ${activeCity(city)}`}
          key={city}
          onClick={() => saerchWeather(city)}
        >
          {city}
        </button>)}
    </>
  )
}

export default CityMenu
