import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyUsersFollow = () => {
  const [myUsers, setMyUsers] = useState([]);
    
  
useEffect(() => {
  axios.get("http://localhost:4000/api/userfollow/usersFollows").then((v) => {
    setMyUsers(v.data);
  });
}, []);

const UnfollowUser = async (id) => {

 //const formData = new FormData();
 //formData.append("id_user", id.id_user._id);
 //formData.append("id_club", id.id_club._id);
 //console.log(id.id_user._id);
 //console.log(id.id_club._id);



 await axios.delete(
   "http://localhost:4000/api/userfollow/unfollow/"+
   id._id);
        toast("unfollow visitor ", {type: "error",});
        const prevState = myUsers;
        const new_state = prevState.filter((eq) => eq._id !== id._id);
        setMyUsers(new_state);
};


    return ( <div className="col-12 col-xl-4">
    <div className="card h-100">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-0">Subscriptions</h6>
      </div>
      <div className="card-body p-3">
        <ul className="list-group">
        {myUsers.map((cl) => (

          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
              <div
                    style={{
                      backgroundImage: `url(${
                        "http://localhost:4000/api/user/getImage/" + cl.id_user_follow._id
                      })`,
                      backgroundSize: "cover",
                      height: "3em",
                      width: "50px",
                      borderRadius: "20px",
                      marginRight:"10px"
                    }}
                    className="border-radius-lg shadow"
                  />
            <div className="d-flex align-items-start flex-column justify-content-center">
              <h6 className="mb-0 text-sm"> {cl.id_user_follow.prenom} {cl.id_user_follow.nom}</h6>
              <p className="mb-0 text-xs">{cl.id_user_follow.email}</p>
            </div>
            <button className="btn btn-link pe-3 ps-0 mb-0 ms-auto" onClick={() => 
                          UnfollowUser(cl)
                        }>Unfollow</button>
                                  <ToastContainer></ToastContainer>

          </li>
    
    ))}

        
      
        </ul>
      </div>
    </div>
  </div>  );
}
 
export default MyUsersFollow;