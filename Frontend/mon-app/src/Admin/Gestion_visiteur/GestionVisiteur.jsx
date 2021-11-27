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
      <div
        className="content_Visiteur"
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <div className="visiteur">
          <div className="title_categorie_icons">
            <strong></strong>
          </div>
        </div>
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
      </div>

      <table className="table_equipe">
        <tbody>
          <tr className="table_tr">
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>

            <th />
          </tr>
        </tbody>
        {visiteur.map((v) => (
          <tbody className="tbody_equipe">
            <tr className="equipe_body">
              <td>
              <div className="equipe_first">

                <div
                  className="equipe_first_cercle"
                  style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/" + v._id
                    })`,
                    backgroundSize: "cover",
                  }}
                ></div>{" "}
             
                <div className="equipe_first_info">
                  <span>{v.nom}</span>
                </div>
                </div>
              </td>

              <td>
                <div className="equipe_second">
                  <span>{v.prenom}</span>
                </div>
              </td>

              <td>
                <div className="equipe_third">
                  <span>{v.email}</span>
                </div>
              </td>

              <td>
                <img
                  src="/image/icons/delete_icons.png"
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
                        deleteUser(v._id);
                      }
                    });
                  }}
                />
              </td>
            </tr>
            <br />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default GestionVisiteur;
