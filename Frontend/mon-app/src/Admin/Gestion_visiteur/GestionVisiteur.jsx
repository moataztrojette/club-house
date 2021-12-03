import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const GestionVisiteur = (props) => {
  const [visiteur, setListeVisiteur] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/user/users").then((v) => {
      setListeVisiteur(v.data);
    });
  }, []);

  const deleteUser = async (id) => {
    await axios
      .delete("http://localhost:4000/api/user/deleteUser/" + id)
      .then((verife) => {
        if (verife.status != 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } else {
          const preventStatu = visiteur;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setListeVisiteur(newState);
          Swal.fire("Visiteur", "Visiteur a été supprimé", "success");
        }
      });
  };

  const rechercheUsers = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/user/users").then((res) => {
        setListeVisiteur(res.data);
      });
    } else {
      let serche = await axios.get(
        "http://localhost:4000/api/user/serche/" + event.target.value
      );
      setListeVisiteur(serche.data);
    }
  };

  return (
    <div>
        
    <div className="row">
    <div className="col-12">
      <div className="card mb-4">
      <form className="d-flex align-items-center h-100" action="#">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Chercher user"
              name="serche"
              onChange={rechercheUsers}
            />
          </div>
        </form>

        <div className="card-header pb-0">
          <h6>Liste Visiteurs</h6>
        </div>
        <div className="card-body px-0 pt-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Visiteur</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Telephone</th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date de naissance</th>
                  <th className="text-secondary opacity-7" />
                </tr>
              </thead>
              {visiteur.map((v) => (
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex px-2 py-1">
                      <div>
                        <div className="equipe_first_cercle"
                  style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/" + v._id
                    })`,
                    backgroundSize: "cover",
                  }} className="avatar avatar-sm me-3" alt="user1" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{v.prenom} {v.nom}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-xs font-weight-bold mb-0">{v.email}</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className="">{v.telephone}</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{v.date_nais}</span>
                  </td>
                  <td className="align-middle">
                    <a href="#"           onClick={() => {
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
                        deleteUser(v._id);
                      }
                    });
                  }}
                   className="badge badge-sm bg-gradient-success" data-toggle="tooltip" data-original-title="Edit user">
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
  </div>
  );
};

export default GestionVisiteur;
