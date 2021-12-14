import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2"; 
const MyStatus = () => {

    const [status, setStatus] = useState([]);
    
      
    useEffect(() => {
        axios.get("http://localhost:4000/api/status/find").then((stat) => {
            setStatus(stat.data);
          });
       
      }, []);

      const deleteStatu = async (id) => {
        await axios
        .delete("http://localhost:4000/api/status/delete/" + id._id)
        .then((verife) => {
          if (verife.status != 200) {
            Swal.fire("Deleted!", "Your file has been deleted.", "error");
          } else {
            const preventStatu = status;
            const newState = preventStatu.filter((dev) => dev._id != id._id);
            setStatus(newState);
            Swal.fire("Publication", "Publication has been deleted", "success");
          }
        });
      }


    return ( <div>
                {status.map((ro) => (
          <div className="publication" style={{width:"40em",marginRight:"2em",marginLeft:"1em"}}>
            <div className="publication_info">
              <div className="publication_info_image">
                <div
                  style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/" +
                      ro.id_user._id
                    })`,
                    backgroundSize: "cover",
                  }}
                  className="publication_img-per"
                  alt=""
                  srcSet
                ></div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="pub_name_email">
                  <h4>
                    {ro.id_user.prenom} {ro.id_user.nom}
                  </h4>
                  <h6>{ro.id_user.email}</h6>
                  <h6>{ro.date}</h6>
                </div>
                <div style={{ marginLeft: "110%" }}>
           
                    <button
                      className="btn btn-link text-danger text-gradient px-3 mb-0"
                      href="javascript:;"
                      onClick={() => {
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
                            deleteStatu(ro);
                          }
                        });
                      }}

                    >
                      <i className="far fa-trash-alt me-3" />
                    </button>
                </div>
              </div>
            </div>
            <div className="publication_image_pub">
              <div className="publication_image">
                <div
                  className="image_status"
                  style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/status/getImage/" + ro._id
                    })`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "20em",
                  }}
                  alt=""
                ></div>
              </div>
              <p class="publication_status" style={{width:"38em"}}>{ro.publication}</p>
            </div>
          </div>
        ))}
    </div> );
}
 
export default MyStatus;