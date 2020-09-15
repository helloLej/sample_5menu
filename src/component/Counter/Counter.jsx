import React from 'react'
import './style.css'

function Counter({title, count, onIncrease, onDecrease}) {
  return (
    <>
      <button className="counter_btn" onClick={onIncrease}>+</button>
      <span className="counter_value">{count}</span>
      <button className="counter_btn" onClick={onDecrease}>-</button>
      <div className="counter_title">Count title : {title}</div>
    </>
  )
}

export default Counter
