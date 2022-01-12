import logo from './logo.svg';
import './App.css';
import { createRef, useRef } from 'react';


// 1. Redux
// 2. React-redux
// 3. Redux-Thunk
// 4. Redux-Saga
// 5. Redux-Toolkit
function App() {

  let InputRef = createRef()
  let data = InputRef.current.value;
  return (
    <div className="App">
      <h1>Counter : {data}</h1>

      <input ref={InputRef} size="5"  type="range" name="" id="" />

      {console.log(data)}
    </div>
  );
}

export default App;
