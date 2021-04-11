import React from "react";
import Side from "./illustration.png"

const Integration = () => {
  return(
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 
                        d-flex justify-content-center flex-column">
              <h1><p style="color:#3059c8">Superfone Integrates<br/>Seamlessly With All Leading <br/>CRMs Used By Sales Teams</h1></p>
           <h5>Easily keep your CRM updated in real-time with all<br/>customer calls and notes,
              tasks so you always have a <b/>complete picture of your pipeline</h5> 
            <div className="mt-3 button-row">
            <a href="" type="button" className="btn1 btn-outline-primary
                   btn-lg signin-button">Request Demo</a>

                  <a href="" type="button" className="btn btn-primary btn-lg 
                  trial-button">Start Free Trial</a>
            </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={Side} className="img-fluid animated" alt="illustration png" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Integration;
