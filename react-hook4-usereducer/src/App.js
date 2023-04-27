import './App.css';
import HookCounter_useReducer1 from './Components/HookCounter_useReducer1';
import HookCounter_useReducer2 from './Components/HookCounter_useReducer2';
import HookCounter_useReducer3_multipleReducer from './Components/HookCounter_useReducer3_multipleReducer';

function App() {
  return (
    <div className="App">
        <h2> / ***********************#################################*************************/</h2>
        <p> useReducer :- with simple state </p>
        <HookCounter_useReducer1/>
        <h2> / ***********************#################################*************************/</h2>
        <p> useReducer :- with complex multiple states </p>
        <HookCounter_useReducer2/>
        <h2> / ***********************#################################*************************/</h2>
        <p> Multiple useReducer  </p>
        <HookCounter_useReducer3_multipleReducer/>
    </div>
  );
}

export default App;
