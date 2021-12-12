import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyClubFollow = () => {
    const [myClub, setMyClub] = useState([]);
    
    const backImage = [
        "/image/Equipe/montage.png",
        "/image/Equipe/régie.png",
        "/image/Equipe/son.png",
      ];
useEffect(() => {
    axios.get("http://localhost:4000/api/clubUser/clubFollow").then((v) => {
        setMyClub(v.data);
    });
  }, []);

  const UnfollowClubUser = async (id) => {
  
   //const formData = new FormData();
   //formData.append("id_user", id.id_user._id);
   //formData.append("id_club", id.id_club._id);
   //console.log(id.id_user._id);
   //console.log(id.id_club._id);



   await axios.delete(
     "http://localhost:4000/api/clubUser/unfollow/"+
     id._id);
          toast("Unfollow club ", {type: "error",});
          const prevState = myClub;
          const new_state = prevState.filter((eq) => eq._id !== id._id);
          setMyClub(new_state);

  };



    return (  <div className="col-12 mt-4">
    <div className="card mb-4">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-1">M'y Clubs Subscribe</h6>
      </div>
      <div className="card-body p-3">

        <div className="row">
        {myClub.map((cl) => (

          <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
            <div className="card card-blog card-plain">
              <div className="position-relative" >
                <div  style={{
                    backgroundImage: `url(${
                      backImage[Math.floor(Math.random() * backImage.length)]
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width:"100%",
                    height:"10em"
                  }}>
                    
                </div>

              </div>
              <div className="card-body px-1 pb-0">
                <a href="javascript:;">
                  <h5>
                    {cl.id_club.nom_club}
                  </h5>
                </a>
     
                <p className="mb-4 text-sm">
                {cl.id_club.date} {cl.id_club.date_debut_reunion} - {cl.id_club.date_fin_reunion}
                </p>
                <div style={{display:"flex"}}>
                <div className="d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn btn-success btn-sm mb-0"><a a href={cl.id_club.link} target="_blank">Let's go</a></button>
               
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn-outline-primary btn-sm mb-0" onClick={() => 
                          UnfollowClubUser(cl)
                        }>Unfollow</button>
                </div>
                </div>

              </div>                  <ToastContainer></ToastContainer>

            </div>
          </div>
         
         ))}
      
      
        </div>
                 
    
      </div>
    </div>
  </div>  );
}
 
export default MyClubFollow;