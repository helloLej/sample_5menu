import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../component/Counter/Counter'
import { increase, decrease } from '../redux/modules/counter'

function CounterContainer() {
  const state = useSelector((state) => ({
    ...state.counter,
  }))
  const dispatch = useDispatch()

  return (
    <div>
      <Counter
        {...state}
        onIncrease={() => dispatch(increase())}
        onDecrease={() => dispatch(decrease())}
      />
    </div>
  )
}

export default CounterContainer
