
import { useState } from 'react';
import './App.css';

function App() {
  const[option, setOption] = useState('Z');

  function onButtonClick(opt) {
    setOption(opt);
  }

  return (
    <div className="App">
      <div>What is your favourite colour?</div>
      <button className="answer" onClick={() => onButtonClick('A')}>
        Flip the turtle!
      </button>
      <button className="answer" onClick={() => onButtonClick('B')}>
        Flip another turtle!
      </button>

      <div>This is what you choose {option}</div>
    </div>
  );
}

export default App;
