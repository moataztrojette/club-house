import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UsersFollow = () => {
  const [visiteur, setListeVisiteur] = useState([]);
  const [stateId_user_api,setId_user_api] = useState([])

  useEffect(() => {
    let id_user_api = [];

    axios.get("http://localhost:4000/api/user/users").then((v) => {
      setListeVisiteur(v.data);
    });

    axios.get("http://localhost:4000/api/userfollow/apifollow").then((api) => {
      id_user_api.push(api.data._id);
      setId_user_api(id_user_api[0]);
    });

  }, []);

  const followUser = async (id) => {
    try {
      const formData = new FormData();
      formData.append("id_user_follow", id._id);

      await axios.post("http://localhost:4000/api/userfollow/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast("Follow ", {
        type: "success",
      });
    } catch (error) {
      if (error.response.data) {
        toast(error.response.data, {
          type: "error",
        });
      }
    }
  };


  return (
    <div
      className="col-12 col-xl-4"
      style={{
        height: "50em",
        marginTop: "18px",
      }}
    >
      <div className="card h-100">
        <div className="card-header pb-0 p-3">
          <h6 className="mb-0">Visiteurs</h6>
        </div>

        <div className="card-body p-3">
          <ul className="list-group">
            {visiteur.map((v) => (
              <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                <div className="avatar me-3">
                  <div
                    style={{
                      backgroundImage: `url(${
                        "http://localhost:4000/api/user/getImage/" + v._id
                      })`,
                      backgroundSize: "cover",
                      height: "3em",
                      width: "50px",
                      borderRadius: "20px",
                    }}
                    className="border-radius-lg shadow"
                  />
                </div>
                <div className="d-flex align-items-start flex-column justify-content-center">
                  <h6 className="mb-0 text-sm">
                    {v.prenom} {v.nom}
                  </h6>
                  <p className="mb-0 text-xs">{v.email} </p>
                </div>
               

                {
                       (stateId_user_api) == (v._id) ? <div></div> :   <button

                       className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                       href="javascript:;
                       "
                       onClick={() => followUser(v)}
                     >
                       Follow
                     </button>
                    }

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersFollow;
