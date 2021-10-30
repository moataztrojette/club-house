import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from './Home/Index';
import Login from './Home/Authentification/Login';
import Singup from './Home/Authentification/Singup';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/login" component={Login}/>
          <Route path="/singup" component={Singup}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
