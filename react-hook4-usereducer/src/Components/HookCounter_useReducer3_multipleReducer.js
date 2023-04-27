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

function HookCounter_useReducer3_multipleReducer() {

  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)

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

      <h2> Count value:- {count2} </h2>
      <button onClick={() => dispatch2({ type: "Increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch2({ type: "Decrement" })}>
        Decrement
      </button>
      <button onClick={() => dispatch2({ type: "Reset" })}>
        Reset
      </button>
    </div>
  )
}

export default HookCounter_useReducer3_multipleReducer