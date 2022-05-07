import './App.css';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import OnlineExp from './components/OnlineExp'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((item)=>{
    return <Card 
      key = {item.id}
      item = {item}
    />
  })
  return (
    <div className="App">
    <Navbar/>
    <Grid />
    <OnlineExp />
    <section className='card-section'>
       {cards}
    </section>
    </div>
  );
}

export default App;
