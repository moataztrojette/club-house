import {React,useState,useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";

const Status = (props) => {

  const [status, setStatus] = useState([]);
  const [valuesInput, setValues] = useState({
  });
  const [profil, setProfil] = useState([]);

   




  useEffect(() => {
    axios.get("http://localhost:4000/api/status/findall").then((stat) => {
      setStatus(stat.data);
      axios.get("http://localhost:4000/api/user/coordonner").then((v) => {
        setProfil(v.data);
      });

    });
    
  }, []);



  const uploadToState = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.files[0];
    setValues(res);
  };
  
  const MyValueInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("publication", valuesInput.publication);
    formData.append("image", valuesInput.image);
    console.log(valuesInput)
    let dataStatus = await axios.post(
      "http://localhost:4000/api/status/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      } 
    );

    toast("publication a été ajouter avec success ", {
      type: "success",
    });
    console.log(status)
    const prevState = status;
    prevState.push(dataStatus.data);
    setStatus(prevState);
    console.log(status)
    props.history.push('/user/status');

   
  };


    return ( 
        <div className="blog">
       

       <ToastContainer></ToastContainer>

         <div className="status">
        <form onSubmit={handleFormSubmit} encType="multipart/form-data" >
          <div className="add_post">
           <div style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/"+profil._id
                    })`,
                    backgroundSize: "cover",
                  }} className="publication_img-per" alt="" srcSet ></div>

            <input
              type="text"
              className="input_statu"
              placeholder="What's on your mind "
              onChange={MyValueInput}
              name="publication"
            />
          </div>
          <div className="btn_post_upload">
            <input
              type="file"
              className="uploadfile-statu"
              name="image"
              onChange={uploadToState}
            />
            <button type="submit" className="btn-upload-statu">
              Post
            </button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>

        {status.map((ro) => (

        <div className="publication">

          <div className="publication_info">
            <div className="publication_info_image">
              <div style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/"+ro.id_user._id
                    })`,
                    backgroundSize: "cover",
                  }} className="publication_img-per" alt="" srcSet ></div>
            </div> 
            <div className="pub_name_email">
              <h4>{ro.id_user.prenom} {ro.id_user.nom}</h4>
              <h6>{ro.id_user.email}</h6>
              <h6>{ro.date}</h6>

            </div>
          </div>
          <div className="publication_image_pub">
            <div className="publication_image">
              <div className="image_status" style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/status/getImage/" +ro._id
                    })`,
                    backgroundSize: "cover",
                    height:"40em"
                  }} alt="" ></div>
            </div>
            <p class="publication_status">
{ro.publication}
</p>
          </div>
        </div>

          ))}
      </div>

    );
}
 
export default Status;