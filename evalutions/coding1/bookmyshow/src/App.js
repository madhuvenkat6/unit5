import './App.css';
import {Route,Switch} from "react-router-dom"
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Shows } from './components/pages/Shows';
import { NewShows } from './components/pages/NewShows';
import { Login } from './components/pages/Login';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Switch>
       <Route path="/" exact>
         <Home/>
       </Route>
       <Route path="/about" exact>
         <About/>
       </Route>
       <Route path="/shows" exact>
         <Shows/>
       </Route>
       <Route path="/newshows">
         <NewShows/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
