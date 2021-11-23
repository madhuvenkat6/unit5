import './App.css';
import { Cart } from './components/cart';
import { Home } from './components/home';
import { Route, Switch ,Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <h1>Shop</h1>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Switch>

        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>



    </div>
  );
}

export default App;
