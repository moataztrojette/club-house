import { React, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";
import UsersFollow from "./Components/UsersFollow";

const Status = (props) => {
  const [status, setStatus] = useState([]);
  const [statePub, setStatePub] = useState([]);

  const [stateId_user_api, setId_user_api] = useState([]);

  const [valuesInput, setValues] = useState({});

  useEffect(() => {
    let id_user_api = [];

    axios.get("http://localhost:4000/api/status/findall").then((stat) => {
      setStatus(stat.data);
    });
    axios.get("http://localhost:4000/api/user/coordonner").then((api) => {
      id_user_api.push(api.data._id);
      setId_user_api(id_user_api[0]);
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
    console.log(valuesInput);
    let dataStatus = await axios.post(
      "http://localhost:4000/api/status/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast("publication was successfully added ", {
      type: "success",
    });
    console.log(status);

    const prevState = status;
    prevState.unshift(dataStatus.data);
    setStatus(prevState);
    console.log(status);
    props.history.push("/user/status");
  };


  const deleteStatu = async (id) => {
    await axios
    .delete("http://localhost:4000/api/status/delete/" + id._id)
    .then((verife) => {
      if (verife.status != 200) {
        Swal.fire("Deleted!", "Your file has been deleted.", "error");
      } else {
        const preventStatu = status;
        const newState = preventStatu.filter((dev) => dev._id != id._id);
        setStatus(newState);
        Swal.fire("Publication", "Publication has been deleted", "success");
      }
    });
  }




  return (
    <div className="container_status">
      <div className="blog">
        <ToastContainer></ToastContainer>

        <div className="status">
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <div className="add_post">
              <img
                src="/image/dashboard/iconUser.png"
                className="publication_img-per"
                alt=""
                srcSet
              ></img>

              <textarea
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
                <div
                  style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/user/getImage/" +
                      ro.id_user._id
                    })`,
                    backgroundSize: "cover",
                  }}
                  className="publication_img-per"
                  alt=""
                  srcSet
                ></div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="pub_name_email">
                  <h4>
                    {ro.id_user.prenom} {ro.id_user.nom}
                  </h4>
                  <h6>{ro.id_user.email}</h6>
                  <h6>{ro.date}</h6>
                </div>
                <div style={{ marginLeft: "170%" }}>
                  {stateId_user_api != ro.id_user._id ? (
                    <div></div>
                  ) : (
                    <button
                      className="btn btn-link text-danger text-gradient px-3 mb-0"
                      href="javascript:;"
                      onClick={() => {
                        Swal.fire({
                          title: "Êtes - vous sûr ?",
                          text: "",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Oui, supprimez-le!",
                        }).then((result) => {
                          if (result.value) {
                            deleteStatu(ro);
                          }
                        });
                      }}

                    >
                      <i className="far fa-trash-alt me-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="publication_image_pub">
              <div className="publication_image">
                <div
                  className="image_status"
                  style={{
                    backgroundImage: `url(${
                      "http://localhost:4000/api/status/getImage/" + ro._id
                    })`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "20em",
                  }}
                  alt=""
                ></div>
              </div>
              <p class="publication_status">{ro.publication}</p>
            </div>
          </div>
        ))}
      </div>
      <UsersFollow />
    </div>
  );
};

export default Status;
