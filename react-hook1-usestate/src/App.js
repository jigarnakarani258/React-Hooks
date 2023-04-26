import './App.css';
import HookCounter_useState1 from './Components/HookCounter_useState1'
import HookWithArray_useState3 from './Components/HookWithArray_useState3';
import HookwithObject_useState2 from './Components/HookwithObject_useState2';

function App() {
  return (
    <div className="App">
      <h2> 1.useState hook with prevState demo</h2>
      <HookCounter_useState1/>
      <h2> 2.useState hook with object demo</h2>
      <HookwithObject_useState2/>
      <h2> 3.useState hook with Array demo</h2>
      <HookWithArray_useState3/>
    </div>
  );
}

export default App;
