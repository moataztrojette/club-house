import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const ModalUpdate = (props) => {
  const handleFormSubmitUpdate = async (event) => {
    event.preventDefault();
    const dataClub = await axios.put(
      "http://localhost:4000/api/club/update/" + props.valuesInput_update._id,
      props.valuesInput_update
    );

    toast("Club a été Modifiér avec success ", {
      type: "success",
    });

    const resFind = props.myClubCreated.find(
      (element) => element._id === props.valuesInput_update._id
    );
    const newState = props.myClubCreated;
    const index = props.myClubCreated.indexOf(resFind);
    newState[index] = dataClub.data;
    props.setMyClubCreated(newState);
  };

  return (
    <div>
      <Modal
        isOpen={props.modalUpdateIsOpen.open}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          props.setModalUpdateIsOpen({
            open: false,
            info: {},
          });
          props.setValues_update({});
        }}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "rgba(206, 239, 248,0.8)",
          },
        }}
      >
        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">Modifier un Club</h3>
          <br />
          <form className="pt-3" onSubmit={handleFormSubmitUpdate}>
            <h5 className="auth-link text-black">Nom du club </h5>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="nom_club"
                disabled
                required
                value={props.valuesInput_update.nom_club}
                onChange={props.MyValueInput_update}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black">Sujet</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="contexte_club"
                required
                value={props.valuesInput_update.contexte_club}
                onChange={props.MyValueInput_update}
              />
            </div>

            <h5 className="auth-link text-black">Date de réunion</h5>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                id="exampleInputUsername2"
                name="date"
                required
                value={props.valuesInput_update.date}
                onChange={props.MyValueInput_update}
              />
            </div>

            <h5 className="auth-link text-black">Date debut réunion </h5>

            <div className="form-group">
              <input
                type="time"
                className="form-control"
                id="exampleInputUsername2"
                name="date_debut_reunion"
                required
                value={props.valuesInput_update.date_debut_reunion}
                onChange={props.MyValueInput_update}
              />
            </div>
            <h5 className="auth-link text-black">Date fin réunion </h5>

            <div className="form-group">
              <input
                type="time"
                className="form-control"
                id="exampleInputUsername2"
                name="date_fin_reunion"
                required
                value={props.valuesInput_update.date_fin_reunion}
                onChange={props.MyValueInput_update}
              />
            </div>


            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Terminer{" "}
              </button>
            </div>

            <div className="mb-2">
              <button
                type="button"
                onClick={() =>
                  props.setModalUpdateIsOpen({
                    open: false,
                    info: {},
                  })
                }
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Retour{" "}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalUpdate;
