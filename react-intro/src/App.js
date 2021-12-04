import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';



// React Dom, Virtual Dom, Working of React Application
// what is the difference between real dom and virtual dom

function App() {
  return (
    <div className="App">
      {/* Codekull... 
      <h1>Javascript is BEST...</h1>
      <h1>App Component</h1>
      <h1>React World</h1>

      <FirstComponent/> */}
      {/* <h1>App component</h1> */}

      <Counter/>
         </div>
  );
}

export default App;
