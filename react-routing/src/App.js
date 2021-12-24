import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './Footer';


// https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
// https://reactrouter.com/docs/en/v6/getting-started/installation
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
       
        <Routes>

          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/home" element={<Home/>} />
<Route path="/footer" element={<Footer/>}/>
         

        </Routes>

      

      </BrowserRouter>

    </div>
  );
}

export default App;
