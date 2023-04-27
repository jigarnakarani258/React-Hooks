import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return initialState;
    default:
      return state;
  }
}

function HookCounter_useReducer1() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2> Count value:- {count} </h2>
      <button onClick={() => dispatch({ type: "Increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  )
}

export default HookCounter_useReducer1