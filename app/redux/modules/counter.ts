/**
 * Reducer and actions for counter state
 * @module counter
 */

// ======================================
// Action constants
// ======================================
const INCREASE = 'counter::INCREASE'
const DECREASE = 'counter::DECREASE'

// ======================================
// Reducer
// ======================================
const initialSate = {
  value: 0
}

export default (state = initialSate, action) => {
  const { type } = action
  switch (type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREASE:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state
  }
}

// ======================================
// Action creators
// ======================================
export const counterIncrease = () => ({
  type: INCREASE
})

export const counterDecrease = () => ({
  type: DECREASE
})