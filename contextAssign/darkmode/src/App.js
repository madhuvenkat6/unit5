import './App.css';
import { NavBar } from './components/Nav';
import { Body } from './components/Body';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div className="App" style={theme}>
      <div style={{display:"flex"}}>
      <NavBar/>
      <Body/>
      </div>
    </div>
  );
}

export default App;
