import './App.css';
import { Route, Switch } from "react-router-dom"
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Shows } from './components/pages/Shows';
import { NewShows } from './components/pages/NewShows';
import { Login } from './components/pages/Login';
import { Nav } from './components/Nav';
import { PrivateRoute } from './components/pages/privateRoute';
import { Movies } from './components/pages/ListOfMovies';
import { Details } from './components/pages/fullDetails';
import { Times } from './components/pages/Times';
import { Ticket } from './components/pages/Ticket';


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
        {/* <Route path="/shows" exact>
          <Shows />
        </Route> */}
        <PrivateRoute path="/shows">
          <Shows/>
        </PrivateRoute>
        <Route path="/newshows">
          <NewShows />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/details"> 
          <Details/>
          </Route>
          
          <Route path="/times" exact>
            <Times/>
          </Route>
          <Route path="/ticket" exact>
            <Ticket/>
            </Route>
        <Route>Error:404 page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
