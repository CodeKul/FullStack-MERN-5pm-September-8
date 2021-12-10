import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import CounterFunc from './components/CounterFunc';
import Form from './components/Form';
import Form2 from './components/Form2';
import HelloMessage from './components/HelloMessage';



// React Dom, Virtual Dom, Working of React Application
// what is the difference between real dom and virtual dom
// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/
// https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd


function App() {
  return (
    <div className="App">
      {/* Codekull... 
      <h1>Javascript is BEST...</h1>
      <h1>App Component</h1>
      <h1>React World</h1>

      <FirstComponent/> */}
      {/* <h1>App component</h1> */}

      <HelloMessage name="Sanket"/>

      <HelloMessage name="Sonali"/>

      <HelloMessage name="Pratik"/>

      <Counter/>

      <CounterFunc/>

      <Form/>

      {/* <Form2/> */}
         </div>
  );
}

export default App;
