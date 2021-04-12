import React from "react";
import Side from "./illustration.png"

const Integration = () => {
  return(
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2
                        d-flex justify-content-center flex-column head-text">
              <h1 className="main-header">Superfone Integrates<br/>Seamlessly With All Leading <br/>CRMs Used By Sales Teams<br/></h1>
           <h5 className="main-body">Easily keep your CRM updated in real-time with all<br/>customer calls and notes,
              tasks so you always have a <br/>complete picture of your pipeline</h5> 
            <div className="mt-3">
            <a href="" type="button" className="btn1 btn-outline-primary btn-lg ">Request Demo</a>

            <a href="" type="button" className="btn btn-primary btn-lg ">Start Free Trial</a>
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
