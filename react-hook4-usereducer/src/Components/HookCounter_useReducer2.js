import React, { useReducer } from 'react'

const initialState = {
  Cash_Count_Of_100_Currency_Note : 0,
  Cash_Count_Of_500_Currency_Note : 2
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment100':
      return { ...state,
        Cash_Count_Of_100_Currency_Note : state.Cash_Count_Of_100_Currency_Note + action.value
      };
    case 'Decrement100':
      return { ...state,
        Cash_Count_Of_100_Currency_Note : state.Cash_Count_Of_100_Currency_Note - action.value
      };
    case 'Increment500':
      return { ...state,
        Cash_Count_Of_500_Currency_Note : state.Cash_Count_Of_500_Currency_Note + action.value
      };
    case 'Decrement500':
      return { ...state,
        Cash_Count_Of_500_Currency_Note : state.Cash_Count_Of_500_Currency_Note - action.value
      };
    case 'Reset':
      return initialState;
    default:
      return state;
  }
}

function HookCounter_useReducer2() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2> Count of 100 Currency_Note :- {count.Cash_Count_Of_100_Currency_Note} </h2>
      <h2> Count of 500 Currency_Note :- {count.Cash_Count_Of_500_Currency_Note} </h2>
      <div> 
        <button onClick={() => dispatch({ type: "Increment100" , value : 1 })}>
          Increment100_By_1
        </button>
        <button onClick={() => dispatch({ type: "Decrement100" , value : 1})}>
          Decrement100_By_1
        </button>
        <button onClick={() => dispatch({ type: "Increment100" , value : 5 })}>
          Increment100_By_5
        </button>
        <button onClick={() => dispatch({ type: "Decrement100" , value : 5 })}>
          Decrement100_By_5
        </button>
      </div>

      <div> 
        <button onClick={() => dispatch({ type: "Increment500" , value : 2 })}>
          Increment500_By_2
        </button>
        <button onClick={() => dispatch({ type: "Decrement500" , value : 2 })}>
          Decrement500_By_2
        </button>
        <button onClick={() => dispatch({ type: "Increment500" , value : 3 })}>
          Increment500_By_3
        </button>
        <button onClick={() => dispatch({ type: "Decrement500" , value : 3 })}>
          Decrement500_By_3
        </button>
      </div>

      <button onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  )
}

export default HookCounter_useReducer2