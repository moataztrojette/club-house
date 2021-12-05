import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import ModalAdd from "./Components/ModalAdd";
const Rooms = () => {
  const backImage = [
    "/image/Equipe/montage.png",
    "/image/Equipe/régie.png",
    "/image/Equipe/son.png",
  ];
  const [rooms, setRooms] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valuesInput, setValues] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/api/room/findall").then((rooms) => {
      setRooms(rooms.data);
      setValues({
        etat_salle: "public",
      });
    });
  }, []);

  const rechercheRooms = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/room/findall").then((res) => {
        setRooms(res.data);
      });
    } else {
      let Serche = await axios.get(
        "http://localhost:4000/api/room/serche/" + event.target.value
      );
      setRooms(Serche.data);
    }
  };

  return (
    <div>
      {modalIsOpen == true ? (
        <ModalAdd
          rooms={rooms}
          setRooms={setRooms}
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
            <h3>Rooms</h3>
          </div>

          <div className="select"></div>
        </div>
        <div className="serhceInput">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Serche Rooms"
                name="serche"
                onChange={rechercheRooms}
              />
            </div>
          </form>

          <button
            type="button"
            onClick={() => setModalIsOpen(true)}
            class="btn_rooms"
          >
            Create a new Rooms +{" "}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="listeRooms">
          {rooms.map((ro) => (
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
                    <h5>Meeting : {ro.nom_salle}</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>
                  <div className="content_slider_equipe">
                    <h5>Realized by :{ro.id_user.prenom} {ro.id_user.nom}</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>

                  <div className="content_slider_equipe">
                    <h5>Data Creation : {ro.date}</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>
              

                  
                  <div className="content_slider_equipe">
                    <h5>
                      {ro.date_debut} - {ro.date_fin}
                    </h5>
                    <svg
                    style={{marginBottom:"10px"}}
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
                      <a href={ro.link} target="_blank">
                        Let's go
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
