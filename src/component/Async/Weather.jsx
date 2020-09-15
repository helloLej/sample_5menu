import React from 'react'
const addZero = (n) => (n < 10 ? '0' + n : n)

function Weather(props) {
  const {city, loading, error, result : {current, image_url}} = props
  let dateString =''
  if(current){
    const createdDate = new Date(current.date)
    const year = createdDate.getFullYear()
    const month = addZero(createdDate.getMonth() + 1 )
    const date = addZero(createdDate.getDate())
    dateString =`${year}-${month}-${date}`
  }

  const weather = current && current.weather

  if (loading) {
    return <div className="async_wrap">Now Loading ...</div>
  }

  if (error) {
    return <div className="async_wrap" style={{color: 'red'}}>{error}</div>
  }

  return (
    <div className="async_wrap">
      <p>City: <b className="async_wrap__result">{city}</b></p>
      <p>Weather: <b className="async_wrap__result">{weather}</b></p>
      <p>Date: <b className="async_wrap__result">{dateString}</b></p>
      <img src={image_url} className="async_weather_img" alt="random"/>
    </div>
  )
}

export default Weather
