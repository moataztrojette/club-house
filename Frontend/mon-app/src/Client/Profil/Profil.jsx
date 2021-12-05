import axios from "axios";
import React, { useEffect, useState } from "react";
import MyClubCreated from "./Components/MyClubCreated";
import MyClubFollow from "./Components/MyClubFollow";
import MyUsersFollow from "./Components/MyUsersFollow";

const Profil = () => {

    const [profil, setProfil] = useState([]);

   


    useEffect(() => {
      axios.get("http://localhost:4000/api/user/coordonner").then((v) => {
        setProfil(v.data);
      });
    }, []);

  



    return ( <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">

    <div className="container-fluid">
      <div className="page-header min-height-300 border-radius-xl mt-4" style={{backgroundImage: 'url("../assets/img/curved-images/curved0.jpg")', backgroundPositionY: '50%'}}>
        <span className="mask bg-gradient-primary opacity-6" />
      </div>
      <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
        <div className="row gx-4">
          <div className="col-auto">
              <div className="image_profil"    style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/"+profil._id
                    })`,
                    backgroundSize: "cover",
                  }}>

              </div>
            </div>
         

          <div className="col-auto my-auto">
            <div className="h-100">
              <h5 className="mb-1">
                {profil.prenom} {profil.nom}
              </h5>
              <p className="mb-0 font-weight-bold text-sm">
              Visitor
              </p>
            </div>
          </div>
      

        
        </div>
      </div>
    </div>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12 col-xl-4">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                  <h6 className="mb-0">Profile Information</h6>
                </div>
              
              </div>
            </div>
            <div className="card-body p-3">
              
              <hr className="horizontal gray-light my-4" />
              <ul className="list-group">
                <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {profil.prenom} {profil.nom}</li>
                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {profil.telephone}</li>
                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {profil.email}</li>
                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Date of Birth:</strong> &nbsp; {profil.date_nais}</li>
       
              </ul>
            </div>
          </div>
        </div>
        <MyUsersFollow/>

      </div>

    </div>
    <MyClubFollow/>
    <MyClubCreated/>
    
    
  </div>);
}
 
export default Profil;