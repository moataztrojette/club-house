import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {React,useState,useEffect} from "react";
import axios from "axios"
import Navbar from "../Interface/Navbar/Navbar";
import Sidebar from "../Interface/Sidebar/Sidebar";
import {withRouter} from 'react-router-dom';
import Clubs from "../../Client/Clubs/Clubs";
import Profil from "../../Client/Profil/Profil";
import Status from "../../Client/Status/Status";
import Rooms from "../../Client/Rooms/Rooms";

const InterfaceUser = (props) => {

  const logout = async ()=>{
    try{
     await axios.post('http://localhost:4000/api/user/logout')
     props.history.replace('/login')
    }
    catch(error){

    }
 }


  const [user, setUser] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:4000/api/user/verif").then((res)=>{
        setUser(res.data)
    }).catch((error)=>{
        if(error.response.status === 403){
            props.history && props.history.replace('/login');
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
            <div class="row" style={{background:"#f2edf3"}}>
            <Switch>
              
                <Route path="/user/profil" component={Profil} />
                <Route path="/user/status" component={Status} />
                <Route path="/user/rooms" component={Rooms} />
                <Route path="/user/clubs" component={Clubs} />

        
            </Switch>

            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default withRouter(InterfaceUser);
