import './App.css';
import Card from './Card.js';
import Sdata from './Sdata';

let ncard=(val)=>{
  return(
    <Card 
    imgsrc={val.imgsrc}
    category={val.category} 
    title={val.title}
    link={val.link}
    />
  );
}

function App() {
  return (
    <> 
    <h1 className='heading_style'> List of Top 3 Netflix 2022 </h1>
    {Sdata.map(ncard)}    
    </>
      );
}

export default App;

