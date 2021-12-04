import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import {withRouter} from 'react-router-dom';
import GestionRooms from "../Admin/Gestion_rooms/GestionRooms"
import GestionVisiteur from "../Admin/Gestion_visiteur/GestionVisiteur";
import {React,useState,useEffect} from "react";
import axios from "axios"
import GestionClubs from "../Admin/Gestion_clubs/GestionClubs";
import Gestion_status from "../Admin/Gestion_Status/Gestion_status";
const Home = (props) => {
  const [user, setUser] = useState(null);

  const logout = async ()=>{
    try{
     await axios.post('http://localhost:4000/api/user/logout')
     props.history.replace('/auth')
    }
    catch(error){

    }
 }

 useEffect(()=>{
  console.log(props)
  axios.get("http://localhost:4000/api/user/verifadmin").then((res)=>{
      setUser(res.data)
  }).catch((error)=>{
      if(error.response.status === 404){
          props.history && props.history.replace('/admin');
          setUser(null)
      }
  } )
},[])

  return (
    <div>
      <body class="g-sidenav-show  bg-gray-100">
        <Sidebar />
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
          <Navbar logout ={logout} />
          <div class="container-fluid py-4">
            <div class="row" >
           <Switch>
          <Route  path="/admin/visiteur" component={GestionVisiteur} />
          <Route  path="/admin/rooms"    component={GestionRooms} />
          <Route  path="/admin/clubs"    component={GestionClubs} />
          <Route  path="/admin/status"    component={Gestion_status} />


           </Switch>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default (Home);
