import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../component/Counter/Counter'
import { increase, decrease } from '../redux/modules/counter'

function CounterContainer() {
  const state = useSelector((state) => ({
    title: state.counter.title,
    count: state.counter.count,
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
