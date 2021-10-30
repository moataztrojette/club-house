const Login = () => {
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
                     <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                     <p className="mb-0">Enter your email and password to sign in</p>
                   </div>
                   <div className="card-body">
                     <form role="form">
                       <label>Email</label>
                       <div className="mb-3">
                         <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                       </div>
                       <label>Password</label>
                       <div className="mb-3">
                         <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                       </div>
                     
                       <div className="text-center">
                         <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                       </div>
                     </form>
                   </div>
                 
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                   <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{backgroundImage: 'url("/img/Authentification/clubeHouse.png")'}}/>
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
 
export default Login;