import React from 'react';
import './App.css';

// components
import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';


function App() {
  return (
    <div className="text-center">
      <Multiplier x={10} y={50} />
      <EvenClicks />
      <CountBy step={5} />
    </div>
  );
}

export default App;
