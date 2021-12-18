import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import ContextComp from './components/ContextComp';
import UserData from './components/UserData';
import UserProvider from './components/UserProvider';
import UserCity from './UserCity';

// props drilling - we are passing data manually each time on each hierarchy-level.
//  https://blog.logrocket.com/react-context-api-deep-dive-examples/
// https://dev.to/iamrishavraj1/what-is-react-prop-drilling-and-context-api-cjl

function App() {

  let sanket = "Sanket Bhosale";
  let swapnil = "Swapnil Bhosale";
  return (
    <div className="App">
     <Message name={sanket}/>

     <Message name={swapnil}/>

     {/* <ContextComp>

     </ContextComp> */}

     <UserProvider>
       <UserData/>
       <UserCity/>
     </UserProvider>
    </div>
  );
}

export default App;
