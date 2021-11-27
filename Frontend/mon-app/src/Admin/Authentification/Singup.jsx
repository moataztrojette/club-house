import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const Singup = () => {
  const [valuesInput, setValues] = useState({});

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
    formData.append("nom", valuesInput.nom);
    formData.append("prenom", valuesInput.prenom);
    formData.append("email", valuesInput.email);
    formData.append("password", valuesInput.password);
    formData.append("image", valuesInput.image);

    try {
      const data = await axios.post(
        "http://localhost:4000/api/user/inscription",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      toast(error.response.data, {
        type: "error",
      });
    }
  };

  return (
    <div>
      <div>
        <section className="min-vh-100 mb-8">
          <div
            className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
            style={{
              backgroundImage: 'url("/img/Authentification/clubeHouse.png")',
            }}
          >
            <span className="mask bg-gradient-dark opacity-6" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center mx-auto">
                  <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                  <p className="text-lead text-white">
                    The magic of Clubhouse is witnessing the most
                    UnlikelyCollisions of people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-lg-n10 mt-md-n11 mt-n10">
              <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div className="card z-index-0">
                  <div className="card-header text-center pt-4">
                    <h5>Register </h5>
                  </div>

                  <div className="card-body">
                    <form
                      role="form text-left"
                      onSubmit={handleFormSubmit}
                      encType="multipart/form-data"
                    >
                      <div className="mb-3">
                        <input
                          name="nom"
                          type="text"
                          required
                          className="form-control"
                          placeholder="First name"
                          aria-label="Name"
                          aria-describedby="email-addon"
                          onChange={MyValueInput}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          name="prenom"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Second name"
                          aria-label="Name"
                          aria-describedby="email-addon"
                          onChange={MyValueInput}
                        />
                      </div>
                      <ToastContainer></ToastContainer>

                      <div className="mb-3">
                        <input
                          name="email"
                          type="email"
                          required
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="email-addon"
                          onChange={MyValueInput}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          name="password"
                          type="password"
                          required
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          onChange={MyValueInput}
                        />
                      </div>

                      <div className="mb-3">

                        <input
                          type="file"
                          className="form-control"
                          name="image"
                          id="exampleInputMobile"
                          required
                          placeholder="image"
                          onChange={uploadToState}
                        />
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn bg-gradient-dark w-100 my-4 mb-2"
                        >
                          Sign up
                        </button>
                      </div>
                      <p className="text-sm mt-3 mb-0">
                        Already have an account?{" "}
                        <NavLink to="/login">Sign in</NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Singup;
