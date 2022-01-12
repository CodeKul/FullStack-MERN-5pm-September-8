import BankOperations from "./components/BankOperations";
import Balance from "./components/Balance";
import "./App.css";
import AccountType from "./components/AccountType";
import Login from "./components/Login";

// https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/ 

function App() {
  return (
    <div className="container">
      <Login />
      <Balance />
      <BankOperations />
      <AccountType />
    </div>
  );
}

export default App;
