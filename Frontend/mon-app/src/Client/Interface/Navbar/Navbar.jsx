import React from "react";
const Navbar = (props) => {
  return (
    <nav
      class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb" style={{display:"flex"}}>
         
          <h2 class="font-weight-bolder mb-0">Welcome to</h2>
          <h2 class="font-weight-bolder mb-0" style={{color:"#FFD700",marginLeft:"1em"}}>Club House</h2>
        </nav>
        <div
          class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
          
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a
                href="javascript:;"
                class="nav-link text-body font-weight-bold px-0"
              >
              </a>

                <img
            src="/image/dashboard/iconUser.png" style={{width:"30px",marginRight:"10px"}}
            class="navbar-brand-img h-100"
            alt="main_logo"
          />
            </li>
           
            <img
            onClick={props.logout}
            src="/image/icons/switch.png" style={{width:"30px"}}
            class="navbar-brand-img h-100"
            alt="main_logo"
          />
 


        
         
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
