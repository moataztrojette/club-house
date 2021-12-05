import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import ModalUpdate from "./ModalUpdate";

const MyClubCreated = () => {
    const [myClubCreated, setMyClubCreated] = useState([]);
    const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState({
        open: false,
        info: {},
      });
    
    
      const [valuesInput_update, setValues_update] = useState({});
      
    const backImage = [
        "/image/Equipe/montage.png",
        "/image/Equipe/régie.png",
        "/image/Equipe/son.png",
      ];

useEffect(() => {
    axios.get("http://localhost:4000/api/club/findclubsuser").then((v) => {
        setMyClubCreated(v.data);
    });
  }, []);

  const deleteClub = async (id) => {
    await axios
    .delete("http://localhost:4000/api/club/deleteclubuser/" + id._id)
    .then((verife) => {
      if (verife.status != 200) {
        Swal.fire("Deleted!", "Your file has been deleted.", "error");
      } else {
        const preventStatu = myClubCreated;
        const newState = preventStatu.filter((dev) => dev._id != id._id);
        setMyClubCreated(newState);
        Swal.fire("Club", "Club has been deleted", "success");
      }
    });
  }
  const MyValueInput_update = (event) => {
    let res = valuesInput_update;
    setValues_update({ ...res, [event.target.name]: event.target.value });
  };


    return (<div className="col-12 mt-4">
              {modalUpdateIsOpen.open === true ? (<ModalUpdate MyValueInput_update={MyValueInput_update} valuesInput_update={valuesInput_update} setValues_update={setValues_update} myClubCreated={myClubCreated} setMyClubCreated={setMyClubCreated} modalUpdateIsOpen={modalUpdateIsOpen} setModalUpdateIsOpen={setModalUpdateIsOpen} />) : (<div></div>)  }  

    <div className="card mb-4">

      <div className="card-header pb-0 p-3">
        <h6 className="mb-1">M'y Clubs Created</h6>
      </div>
      <div className="card-body p-3">

        <div className="row">
        {myClubCreated.map((cl) => (

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
                    {cl.nom_club}
                  </h5>
                </a>
                <h6>Subject: {cl.contexte_club} 
</h6>
                <p className="mb-4 text-sm">
                {cl.date} {cl.date_debut_reunion} - {cl.date_fin_reunion}
                </p>
                <div style={{display:"flex"}}>
                <div className="d-flex align-items-center justify-content-between">
                  <button type="button" style={{
                      marginRight:"10px"
                  }} className="btn btn btn-success btn-sm mb-0" onClick={() => {
                      Swal.fire({
                        title: "Êtes - vous sûr ?",
                        text: "",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Oui, supprimez-le!",
                      }).then((result) => {
                        if (result.value) {
                          deleteClub(cl);
                        }
                      });
                    }}>Delete</button>
               
               <button type="button"  onClick={() => {
                      setModalUpdateIsOpen({
                        open: true,
                        info: cl,
                      });
                      setValues_update(cl);
                    }}  className="btn btn btn-primary btn-sm mb-0">Update</button>

                </div>
        
                </div>

              </div>                 

            </div>
          </div>
         
         ))}
      
      
        </div>
                 
    
      </div>
    </div>
  </div>   );
}
 
export default MyClubCreated;