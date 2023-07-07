// import { useState } from 'react';
import './App.css';
import Forcast from './components/forcast/Forcast';
import Input from './components/inputs/Input';
import TimeAndLocation from './components/timeandloc/TimeAndLocation';
import TopNav from './components/topbuttons/TopNav';
import TemperatureAndDetails from './tempanddet/TemperatureAndDetails';


function App() {

  return (
    // <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl" style={{  
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1603288967520-f3e04381dc02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

    <TopNav/>
      <Input/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>

      <Forcast title='hourly forecast'/>
      <Forcast title='Daily forecast'/>

    </div>
  );
}

export default App;
