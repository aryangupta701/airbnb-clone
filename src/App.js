import './App.css';
import Navbar from './components/Navbar'
import Grid from './compenents/Grid.js'
import OnlineExp from './compenents/OnlineExp.js'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Grid />
    <OnlineExp />
    </div>
  );
}

export default App;
