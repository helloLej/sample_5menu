import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as weatherModule from '../redux/modules/weather'
import Weather from '../component/Async/Weather'

const WeatherContainer = (props) => {
  const { result, loading, error } = useSelector((state) => {
    return {
      ...state.weather,
    }
  })

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(weatherModule.dataAsync(props.focusedCity))
  }, [props.focusedCity])

  return (
    <Weather
      result={result}
      loading={loading}
      error={error}
      city={props.focusedCity}
    />
  )
}

export default React.memo(WeatherContainer)
