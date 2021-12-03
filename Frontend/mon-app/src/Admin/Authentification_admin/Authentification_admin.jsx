import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentification_admin = (props) => {

  const [valuesInput,setValues] = useState({});

  const MyValueInput = (event)=>{
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  }

  const handleFormSubmit = async(event)=>{
    event.preventDefault();
    try{
     await axios.post("http://localhost:4000/api/user/isadmin",valuesInput)
     props.history.push("/admin");
    }catch(error){
        toast(error.response.data,{
          type: "error",
        });
    }
}
    return ( <div>
        <div>
     <div className="container position-sticky z-index-sticky top-0">
       <div className="row">
         <div className="col-12">
     
         </div>
       </div>
     </div>
     <main className="main-content  mt-0">
       <section>
         <div className="page-header min-vh-75">
           <div className="container">
             <div className="row">
               <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                 <div className="card card-plain mt-8">
                   <div className="card-header pb-0 text-left bg-transparent">
                     <h3 className="font-weight-bolder text-info text-gradient">Welcome back Admin</h3>
                     <p className="mb-0">Enter your email and password to sign in</p>
                   </div>
                   <div className="card-body">
                     <form role="form" onSubmit={handleFormSubmit}>
                       <label>Name</label>
                       <div className="mb-3">
                         <input type="text" className="form-control" placeholder="Email" name="email" aria-label="Email" aria-describedby="email-addon" onChange={MyValueInput} />
                       </div>
                       <label>Password</label>
                       <div className="mb-3">
                         <input type="password" className="form-control" placeholder="Password" name="password" aria-label="Password" aria-describedby="password-addon" onChange={MyValueInput} />
                       </div>
                     
                       <div className="text-center">
                         <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                       </div>
                     </form>
                   </div>
                   <ToastContainer></ToastContainer>

                 
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                   <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{backgroundImage: 'url("/img/Authentification/tg_group_admins.jpg")'}}/>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </main>
     {/* -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- */}
    </div>
 </div>  );
}
 
export default Authentification_admin;