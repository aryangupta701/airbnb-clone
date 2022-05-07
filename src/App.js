import './App.css';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import OnlineExp from './components/OnlineExp'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Grid />
    <OnlineExp />
    <Card />
    </div>
  );
}

export default App;
