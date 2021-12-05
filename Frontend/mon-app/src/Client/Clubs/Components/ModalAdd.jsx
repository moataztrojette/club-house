import { React } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const ModalAdd = (props) => {
  const MyValueInput = (event) => {
    let res = props.valuesInput;
    res[event.target.name] = event.target.value;
    props.setValues(res);
  };
  const handleFormSubmit = async (event) => {
    console.log(props.valuesInput);
    event.preventDefault();
    const dataClubs = await axios.post(
      "http://localhost:4000/api/club/add",
      props.valuesInput
    );
    toast("Club was successfully added ", {
      type: "success",
    });
    console.log(props.clubs)
    console.log("next")
    const prevStateClub = props.stateClubs;
    console.log(prevStateClub);
    prevStateClub.push(dataClubs.data);
    props.setClubs(prevStateClub);
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "55%",
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
        <div className="auth-form-light text-left p-4">
          <h3 className="font-weight-light">Add a new Club</h3>
          <br />
          <form className="pt-3" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <h5 className="auth-link text-black"> Club name </h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="nom_club"
                required
                placeholder="Club name"
                onChange={MyValueInput}
              />
            </div>
            <div className="form-group">
              <h5 className="auth-link text-black">Club subject </h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="contexte_club"
                required
                placeholder="Club subject"
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black"> Date Meeting </h5>
              <input
                type="date"
                className="form-control"
                id="exampleInputUsername2"
                name="date"
                required
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black"> start Meeting  date </h5>
              <input
                type="time"
                className="form-control"
                id="exampleInputUsername2"
                name="date_debut_reunion"
                required
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black"> end Meeting  date </h5>
              <input
                type="time"
                className="form-control"
                id="exampleInputUsername2"
                name="date_fin_reunion"
                required
                onChange={MyValueInput}
              />
            </div>
            <div className="form-group">
             <h5 className="auth-link text-black"> Meeting link  </h5>
             <input
               type="text"
               className="form-control"
               id="exampleInputUsername2"
               name="link"
               required
               placeholder="Meeting link"
               onChange={MyValueInput}
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
                onClick={() => props.setModalIsOpen(false)}
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Retour{" "}
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default ModalAdd;
