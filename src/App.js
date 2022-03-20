import './App.css';
import Card from './Card.js';
import Sdata from './Sdata';

function App() {
  return (
    <> 

    <h1 className='heading_style'> List of Top 3 Netflix 2022 </h1>

    <Card 
    imgsrc={Sdata[0].imgsrc}
    category={Sdata[0].category} 
    title={Sdata[0].title}
    link={Sdata[0].link}
    />

    <Card 
        imgsrc={Sdata[1].imgsrc}
        category={Sdata[1].category} 
        title={Sdata[1].title}
        link={Sdata[1].link}
        />

    <Card 
        imgsrc={Sdata[2].imgsrc}
        category={Sdata[2].category} 
        title={Sdata[2].title}
        link={Sdata[2].link}
        />
        
    </>
      );
}

export default App;
