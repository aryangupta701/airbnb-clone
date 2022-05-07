import './App.css';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import OnlineExp from './components/OnlineExp'
import Card from './components/Card'
import data from './data'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Grid />
    <OnlineExp />
    {data.map((item)=>{
      return <Card 
        title={item.title}
        price={item.price}
        img={item.coverImg}
        rating ={item.stats.rating}
        reviewCount ={item.stats.reviewCount}
        country="USA"
      />
    })}
    </div>
  );
}

export default App;
