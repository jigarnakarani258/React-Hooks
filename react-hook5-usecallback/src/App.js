import './App.css';
import ParentComponent from './Components/ParentComponent';
import CounterComponent from './Components/useMemoHookDemo/CounterComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      <h2> ***********************************************************</h2>
      <CounterComponent/>
    </div>
  );
}

export default App;
