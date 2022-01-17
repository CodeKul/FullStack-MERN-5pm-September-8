import logo from './logo.svg';
import './App.css';
import { createRef, useRef } from 'react';
import { useSelector } from 'react-redux';
import { rootReducer } from './components/reducers/combineReducer';
import { useDispatch } from 'react-redux';
import { countReducer } from './components/reducers/counterreduce';


// 1. Redux
// 2. React-redux
// 3. Redux-Thunk
// 4. Redux-Saga
// 5. Redux-Toolkit
function App() {


  let stateData = useSelector((countReducer) => countReducer )
  let dispatch = useDispatch()

  console.log(stateData.count)

 

  // let InputRef = createRef()
  // let data = InputRef.current.value;
  return (
    <div className="App">
      {/* <h1>Counter : {data}</h1>

      <input ref={InputRef} size="5" onChange={(e) => dispatch({ type: "update", payload: Number(e.target.value) })} type="range" name="" id="" />

      {console.log(data)} */}
    </div>
  );
}

export default App;
