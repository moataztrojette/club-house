import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "./Home/Index";
import Login from "./Admin/Authentification/Login";
import Singup from "./Admin/Authentification/Singup";
import Home from "./Home/Home";
import Rooms from "./Client/Rooms/Rooms";
import GestionVisiteur from "./Admin/Gestion_visiteur/GestionVisiteur";
import InterfaceUser from "./Client/Interface/InterfaceUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/singup" component={Singup} />
          <Route path="/" exact component={Index} />

          <InterfaceUser>
            <Route path="/rooms" component={Rooms} />
          </InterfaceUser>
          
          <Home>
            <Route path="/users" component={GestionVisiteur} />
          </Home>

       


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
