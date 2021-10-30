import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <body class="g-sidenav-show  bg-gray-100">
        <Sidebar />
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
          <Navbar />
          <div class="container-fluid py-4">
            <div class="row"></div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default Home;
