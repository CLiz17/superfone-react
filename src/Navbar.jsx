import React from 'react'
import Logo from "./head.png"

const Navbar = () => {
    return(
       <>
       <div className="container-fluid nav_bg">
           <div className= 'row'>
               <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
  <a className="navbar-brand" href="/scr/head.png">
<div className="logo-image">
<img src={Logo}/>
</div>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Teams</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Integrations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
        <button type="button" className="btn1 btn-primary btn-lg">Book A Demo</button>
        </li>
        <li classNameName="nav-item">
        <button type="button" className="btn btn-outline-primary btn-lg">Sign In</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
)
}

export default Navbar;