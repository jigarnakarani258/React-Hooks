import './App.css';
import React, { useReducer } from 'react';
import ComponentA from './Components/ComponentA';

const countContext = React.createContext();
const initialState = {
  GlobalCounter : 0 
};

const reducer = (state , action) => {
    switch (action.type) {
        case 'Increment':
          return { GlobalCounter : state.GlobalCounter + 1}
        case 'Decrement':
          return { GlobalCounter : state.GlobalCounter - 1}
        case 'Reset':
          return initialState;
        default:
            return state ;
    }
}

function App() {

  const [state , dispatch] = useReducer(reducer , initialState);

  return (
    <div className="App">
    <countContext.Provider value={ {GlobalCounter : state.GlobalCounter , dispatch : dispatch } }>
        <h2> / ***********************#################################*************************/</h2>
        <p> useReducer with useContext  </p>
        <h2> state share between component global counter :- {state.GlobalCounter} </h2>
        <ComponentA/>
      </countContext.Provider>
    </div>
  );
}

export default App;
export {countContext}
