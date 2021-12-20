import logo from './logo.svg';
import './App.css';
import MusicContext from './components/MusicContext';
import TrackList from './components/TrackList';

function App() {
  return (
    <div className="App">
      <MusicContext>
        <TrackList />

      </MusicContext>
    </div>
  );
}

export default App;
