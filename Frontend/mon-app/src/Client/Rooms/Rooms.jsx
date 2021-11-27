import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
//import ModalAdd from "./Components/ModalAdd";
const Rooms = () => {
  const backImage = ["/image/Equipe/montage.png","/image/Equipe/régie.png","/image/Equipe/son.png"];
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/room/findall").then((rooms) => {
      setRooms(rooms.data);
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

          <button type="button" class="btn_rooms">
            Créer un nouveau Rooms +{" "}
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
                    <h5>Réunion :{ro.nom_salle}</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>
                  <div className="content_slider_equipe">
                    <h5>Réaliser Par :</h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>
                  <div className="content_slider_equipe">
                    <h5>
                      Date Debut : {ro.date_debut} -- {ro.date_fin}
                    </h5>
                    <i className="mdi mdi-delete-sweep"></i>
                  </div>

                  <div className="equipe_liste">
                    <img src="/image/Equipe/imageEquipe.png" alt="" />

                    <button>
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
