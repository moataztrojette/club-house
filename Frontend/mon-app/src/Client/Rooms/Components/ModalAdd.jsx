import {React,useState} from "react";
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
          event.preventDefault();
          const data = await axios.post(
            "http://localhost:4000/api/room/add",props.valuesInput);
      
          toast("Room a été ajouter avec success ", {
            type: "success",
          });
          const prevState = props.rooms;
          prevState.push(data.data);
          console.log(prevState)
          props.setRooms(prevState);
      };
 

    return(<div>
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
         overlay : {
           backgroundColor:"rgba(206, 239, 248,0.8)",
         }
       }}
     >
       <div className="auth-form-light text-left p-4">
         <h3 className="font-weight-light">Ajouter un nouveau Room</h3>
         <br />
         <form
           className="pt-3"
           onSubmit={handleFormSubmit}
         >

          <div className="form-group">
             <h5 className="auth-link text-black"> Nom de salle </h5>
             <input
               type="text"
               className="form-control"
               id="exampleInputUsername2"
               name="nom_salle"
               required
               placeholder="Nom de salle"
               onChange={MyValueInput}
             />
           </div>

           <div className="form-group">
             <h5 className="auth-link text-black"> Date debut </h5>
             <input
               type="time"
               className="form-control"
               id="exampleInputUsername2"
               name="date_debut"
               required
               placeholder="Date debut"
               onChange={MyValueInput}
             />
           </div>

     

           <div className="form-group">
             <h5 className="auth-link text-black"> Date Fin </h5>
             <input
               type="time"
               className="form-control"
               id="exampleInputUsername2"
               name="date_fin"
               required
               placeholder="Date Fin"
               onChange={MyValueInput}
             />
           </div>
         

           <div className="form-group">
           <h5 className="auth-link text-black"> Etat de salle </h5>

             <select
               className="select_room"
               name="etat_salle"
               onChange={MyValueInput}
             >
               <option value="enlocation">Public</option>
               <option value="dansdepot">Private  </option>
             </select>
           </div>

           <div className="form-group">
             <h5 className="auth-link text-black"> Lien réunion  </h5>
             <input
               type="text"
               className="form-control"
               id="exampleInputUsername2"
               name="link"
               required
               placeholder="Lien réunion"
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
     
 </div>  );
}
 
export default ModalAdd;