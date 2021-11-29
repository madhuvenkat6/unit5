import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Shows } from './components/pages/Shows';
import { NewShows } from './components/pages/NewShows';
import { Login } from './components/pages/Login';
import { Nav } from './components/Nav';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/shows" exact>
          <Shows />
        </Route>
        <Route path="/newshows">
          <NewShows />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>Error:404 page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
