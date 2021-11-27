import React from "react";
import Navbar from "../Interface/Navbar/Navbar";
import Sidebar from "../Interface/Sidebar/Sidebar";

const InterfaceUser = (props) => {
  return (
    <div>
      <body class="g-sidenav-show  bg-gray-100">
        <Sidebar />
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
          <Navbar />
          <div class="container-fluid py-4">
            <div class="row" style={{background:"#f2edf3"}}>
            {props.children}

            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default InterfaceUser;
