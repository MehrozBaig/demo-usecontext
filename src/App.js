import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useContext, useState } from 'react';
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState(45);
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
      <div>
        Hello world
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
