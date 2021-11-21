import './App.css';
import { Route, Switch } from "react-router-dom"
import { Home } from './components/home';
import { Products } from './components/products';
import { ProductDetails } from './components/productDetails';
import { NavBar } from './components/nav';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id" exact>
          <ProductDetails />
        </Route>
        <Route>
          <h1>page Not found 404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
