import React from "react";
const NotFound = () => {
  return (
    <div>
      <div class="d-lg-flex half">
        <div className="bg order-1 order-md-1"></div>

        <div class="contents order-2 order-md-2">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <div class="log_title">
                  <div class="logo" style={{width:"100%",height:"100%",marginLeft:"4em"}}>
                    <img src="/image/notefound.jpg" alt="error" />
                  </div>

                </div>
                <div class="form-group first success"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
