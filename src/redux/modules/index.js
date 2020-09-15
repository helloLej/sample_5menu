import { combineReducers } from 'redux'
import counter from './counter'
import weather from './weather'

const rootReducer = combineReducers({
  counter,
  weather,
})

export default rootReducer
