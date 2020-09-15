const PLUS = 'Counter/PLUS'
const MINUS = 'Counter/MINUS'

export const increase = () => ({ type: PLUS })
export const decrease = () => ({ type: MINUS })

const initialState = {
  title: 'waiting..',
  count: 0,
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return {
        title: 'increment',
        count: ++state.count,
      }
    case MINUS:
      return {
        title: 'decrement',
        count: --state.count,
      }
    default:
      return state
  }
}
