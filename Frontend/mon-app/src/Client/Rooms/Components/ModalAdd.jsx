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
      
          toast("Room was successfully added ", {
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
         <h3 className="font-weight-light">Add a new Room</h3>
         <br />
         <form
           className="pt-3"
           onSubmit={handleFormSubmit}
         >

          <div className="form-group">
             <h5 className="auth-link text-black"> Room name </h5>
             <input
               type="text"
               className="form-control"
               id="exampleInputUsername2"
               name="nom_salle"
               required
               placeholder="Room name"
               onChange={MyValueInput}
             />
           </div>

           <div className="form-group">
             <h5 className="auth-link text-black"> Start date </h5>
             <input
               type="time"
               className="form-control"
               id="exampleInputUsername2"
               placeholder="Start date"
               required
               name="date_debut"
               onChange={MyValueInput}
             />
           </div>

     

           <div className="form-group">
             <h5 className="auth-link text-black"> End date </h5>
             <input
               type="time"
               className="form-control"
               id="exampleInputUsername2"
               placeholder="End date"
               required
               name="date_fin"
               onChange={MyValueInput}
             />
           </div>
         

           <div className="form-group">
           <h5 className="auth-link text-black"> Room condition </h5>

             <select
               className="select_room"
               name="etat_salle"
               onChange={MyValueInput}
             >
               <option value="enlocation">Public</option>
               <option value="dansdepot">Private  </option>
             </select>
           </div>
           <div className="form-group" style={{backgroundColor:"#FFD700",borderRadius:"10px",padding:"10px"}}>
            <a href="https://meet.google.com/" target="_blanck" >Generate link meet please !!</a>
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
     
 </div>  );
}
 
export default ModalAdd;