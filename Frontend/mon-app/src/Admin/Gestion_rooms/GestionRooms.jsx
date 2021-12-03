import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const GestionRooms = (props) => {
    const [rooms, setRooms] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:4000/api/room/findall").then((v) => {
        setRooms(v.data);
      });
    }, []);
  
    const deleteRooms = async (id) => {
      await axios
        .delete("http://localhost:4000/api/room/delete/" + id)
        .then((verife) => {
          if (verife.status != 200) {
            Swal.fire("Deleted!", "Your file has been deleted.", "error");
          } else {
            const preventStatu = rooms;
            const newState = preventStatu.filter((dev) => dev._id != id);
            setRooms(newState);
            Swal.fire("Salle", "Room a été supprimé", "success");
          }
        });
    };
  
    const rechercheRoom = async (event) => {
      if (event.target.value === "") {
        axios.get("http://localhost:4000/api/room/findall").then((res) => {
            setRooms(res.data);
        });
      } else {
        let serche = await axios.get(
          "http://localhost:4000/api/room/serche/" + event.target.value
        );
        setRooms(serche.data);
      }
    };
  
    return (
      <div className="row">
      <div className="col-12">
        <div className="card mb-4">
        <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Chercher rooms"
                name="serche"
                onChange={rechercheRoom}
              />
            </div>
          </form>
  
          <div className="card-header pb-0">
            <h6>Liste des rooms</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Visiteur</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Salle</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Link</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                {rooms.map((v) => (
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <div className="equipe_first_cercle"
                    style={{
                      backgroundImage: `url(${
                        "http://localhost:4000/api/user/getImage/" + v.id_user._id
                      })`,
                      backgroundSize: "cover",
                    }} className="avatar avatar-sm me-3" alt="user1" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">{v.id_user.prenom} {v.id_user.nom}</h6>
                          <p class="text-xs text-secondary mb-0">{v.id_user.email}</p>

                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs font-weight-bold mb-0">{v.nom_salle}</p>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="badge badge-warning  bg-gradient-success"> <a href={v.link} target="_blank">
                        Let's go
                      </a></span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">{v.date}</span>
                    </td>
                    <td className="align-middle">
                      <a href="#"onClick={() => {
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
                          deleteRooms(v._id);
                        }
                      });
                    }}
                     className="badge badge-sm bg-gradient-success" data-toggle="tooltip" data-original-title="Edit user" style={{background:"#DC143C"}}>
                        supprimer
                      </a>
                    </td>
                  </tr>
           
                 
          
                </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
 
export default GestionRooms;