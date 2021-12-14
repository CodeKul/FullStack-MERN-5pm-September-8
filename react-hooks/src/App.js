import logo from './logo.svg';
import './App.css';
import Effect from './components/useEffect Hooks/Effect';
import Form from './components/useRef/Form';

// create a table and fetch and display the data from api on the browser 
// jsonplaceholder, google books search api, recipie finder api;

function App() {
  return (
    <div className="App">
    <Form/>
    <Effect/>    </div>
  );
}

export default App;
