import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalAdd from "../Clubs/Components/ModalAdd";

const Clubs = () => {
  const backImage = [
    "/image/Equipe/montage.png",
    "/image/Equipe/régie.png",
    "/image/Equipe/son.png",
  ];
  const [stateClubs, setClubs] = useState([]);
  const [stateId_user_api,setId_user_api] = useState([])


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valuesInput, setValues] = useState({});
 

  useEffect(() => {
    let id_user_api = [];

    axios.get("http://localhost:4000/api/club/findall").then((clubs) => {
      setClubs(clubs.data);
    });
    
      axios.get("http://localhost:4000/api/club/apifollow").then((api) => {
        id_user_api.push(api.data._id);
        setId_user_api(id_user_api[0]);
      });

  },[]);

  const AddClubUser = async (id) => {
    try {
      const formData = new FormData();
      formData.append("id_club", id._id);

      await axios.post("http://localhost:4000/api/clubUser/add", formData, {
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

  const rechercheClub = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/club/findall").then((res) => {
        setClubs(res.data);
      });
    } else {
      let Serche = await axios.get(
        "http://localhost:4000/api/club/serche/" + event.target.value
      );
      setClubs(Serche.data);
    }
  };

  return (
    <div>
      {modalIsOpen == true ? (
        <ModalAdd
          stateClubs={stateClubs}
          setClubs={setClubs}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          valuesInput={valuesInput}
          setValues={setValues}
        />
      ) : (
        <div></div>
      )}
      <div className="content_rooms">
        <div
          className="rooms"
          style={{
            marginLeft: "-12%",
          }}
        >
          <div className="title_categorie_icons">
            <h3>Clubs</h3>
          </div>

          <div className="select"></div>
        </div>
        <div className="serhceInput">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Serche Club"
                name="serche"
                onChange={rechercheClub}
              />
            </div>
          </form>

          <button
            type="button"
            onClick={() => setModalIsOpen(true)}
            class="btn_rooms"
          >
            Create a new Club +{" "}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="listeRooms">
          {stateClubs.map((cl) => (
            <div className="sliderBib">
              <div className="slider_Equipe">
                <div
                  className="image_silder_equipe"
                  style={{
                    backgroundImage: `url(${
                      backImage[Math.floor(Math.random() * backImage.length)]
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
          
      

                <div class="equipe">
                  <div className="content_slider_equipe">
                    <h5>Club name : {cl.nom_club}</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>
                  <div className="content_slider_equipe">
                    <h5>
                    Realized by :{cl.id_user.prenom} {cl.id_user.nom}
                    </h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>

                  <div className="content_slider_equipe">
                    <h5>Meeting data : {cl.date}</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>

                  <div className="content_slider_equipe">
                    <h5>
                      {cl.date_debut_reunion} - {cl.date_fin_reunion}
                    </h5>
                    <svg
                      style={{ marginBottom: "10px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>

                  <div className="equipe_liste">
                    <img src="/image/Equipe/imageEquipe.png" alt="" />

                    <button className="letsgo">
                      <a href={cl.link} target="_blank">
                        Let's go
                      </a>
                    </button>
                    
                    {
                       (stateId_user_api) == (cl.id_user._id) ? <div></div> :  <button
                       className="btn-follow"
                       onClick={() => AddClubUser(cl)}
                     >
                       Follow
                     </button>
                    }

                    

                   
                  </div>
                  <ToastContainer></ToastContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
