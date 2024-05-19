import {useState} from 'react';
import './App.css';
import Hooks from './Hooks';
import Collback from './Collback';

function App() {
  let [Counter, setCounter] = useState(1)

  const addvalue = () => {
    setCounter(Counter + 1 )
  }
  const removevalue = () => {
    setCounter(Counter - 1 )
  }
  return (
    <>
    <h1>Hooks In React</h1>
     <h2>Counter Value : {Counter} </h2>
     <button  onClick={addvalue}>Add Value </button> <br />
     <button onClick={removevalue}>Remove Value</button>
     <hr />
     <Hooks />
     <Collback />

     </>
    );
}

export default App;
