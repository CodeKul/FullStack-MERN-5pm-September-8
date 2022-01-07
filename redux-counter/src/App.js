import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

  let InputRef = useRef();
  let data = InputRef.current.value;
  return (
    <div className="App">
      <h1>Counter : {}</h1>

      <input ref={InputRef} size="5"  type="range" name="" id="" />

      {console.log(data)}
    </div>
  );
}

export default App;
