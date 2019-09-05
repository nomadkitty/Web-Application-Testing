import React, { useState } from 'react';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import './App.css';

export const addOne = num => {
  return num + 1;
}

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const handleStrikes = (strikes) => {
    if (strikes < 2){
     setStrikes(addOne(strikes));
    } else {
      setStrikes(0);
    };
  }
  const handleBalls = (balls) => {
    if (balls < 3){
      setBalls(addOne(balls));
    } else {
      setBalls(0);
    }
  }

  const handleFoul = (strikes) => {
    if (strikes < 2){
      setStrikes(addOne(strikes));
    } else {
      setStrikes(2);
    }
  }

  const handleHit = () => {
    return ( 
      setStrikes(0),
      setBalls(0)
    )
  }

  return (
    <div className="App">
      <h1>Baseball Score Board</h1>
      <Display balls={balls} strikes={strikes}/>
      <Dashboard 
        balls={balls} 
        strikes={strikes}
        handleStrikes={handleStrikes}
        handleBalls={handleBalls}
        handleFoul={handleFoul}
        handleHit={handleHit}
      />
    </div>
  );
}

export default App;
