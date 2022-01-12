import logo from './logo.svg';
import './App.css';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';
import UserCity from './components/UserCity';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">


<Dashboard/>


<UserContext>
  <UserProfile/>
</UserContext>

      <UserContext>
        <UserProfile>
          <UserCity />
        </UserProfile>

      </UserContext>
    </div>
  );
}

export default App;
