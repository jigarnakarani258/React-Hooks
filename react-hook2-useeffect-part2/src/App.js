import './App.css';
import DataFetchingFromAPI from './Components/Datafetching';
import Datafetching_using_parameter from './Components/Datafetching_using_parameter';

function App() {
  return (
    <div className="App">
      <h2> / ***********************#################################*************************/</h2>
      <h2> Get Perticular data :- with parameter - dyanamic route</h2>
      <Datafetching_using_parameter/>
      <h2> / ************************#################################*************************/</h2>
      <h2> Get All data </h2>
      <DataFetchingFromAPI/>
      <h2> / ************************#################################*************************/</h2>
    </div>
  );
}

export default App;
