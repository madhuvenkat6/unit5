import { useContext } from 'react';
import './App.css';
import { Body } from './components/body';
import { Footer } from './components/footer';
import { NavBar } from './components/Nav';
import { ThemeContext } from './contexts/ThemeContext';
import {mode} from "./components/style"

function App() {
  const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className="App" style={theme}>
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
