
import  NavBar  from './components/Navbar/index';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Services } from './components/service';
import { Login } from './components/login';




import React from 'react'

function App() {
  return (
   <BrowserRouter>
     
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
   </BrowserRouter>
  )
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/about-us" exact>
//           <About />
//         </Route>
//         <Route path="/contact" exact>
//           <Contact />
//         </Route>
//         <Route path="/services" exact>
//           <Services />
//         </Route>
//         <Route path="/login" exact>
//           <Login />
//         </Route>
//       </Switch>

//     </div>
//   );
// }

// export default App;
