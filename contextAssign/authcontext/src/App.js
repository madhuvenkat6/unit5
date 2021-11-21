import './App.css';
import {NavBar} from "../src/components/Nav.jsx"
import { Display } from "../src/components/Display.jsx";
import { AuthContext } from "../src/contexts/AuthContext";
import { useContext } from 'react';

function App() {
  
  const {isAuth} = useContext(AuthContext)

  return (
    <div className="App">
      <NavBar/>
      {
        isAuth ? <Display/> : <></>
      }
    </div>
  );
}

export default App;
