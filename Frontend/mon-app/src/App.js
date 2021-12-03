import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "./Home/Index";
import Login from "./Admin/Authentification/Login";
import Singup from "./Admin/Authentification/Singup";
import Home from "./Home/Home";
import InterfaceUser from "./Client/Interface/InterfaceUser";
import NotFound from "./Admin/Authentification/NotFound";
import Authentification_admin from "./Admin/Authentification_admin/Authentification_admin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/user" component={InterfaceUser}/>
          <Route path="/admin" component={Home}/>
          <Route path="/auth" component={Authentification_admin}/>
          <Route path="/singup" component={Singup} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Index} />       
          <Route path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
          </Switch>

      </BrowserRouter>
      
    

    </div>
  );
}

export default App;
