import React from 'react'
import {
    Link
  } from "react-router-dom";
function Navbar() {
    
  return (
    <>
    <div className="container-fluid bg-light position-relative shadow">
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
    <Link className="navbar-brand font-weight-bold text-secondary" style={{fontSize: '30px'}} to="#">
                <i className="flaticon-043-teddy-bear"></i>
                 <span className="text-primary">Kamlaben Badhir Vidhyalaya</span>
    </Link>
    <div className="collapse navbar-collapse justify-content-between"id="navbarCollapse">
    <div className="navbar-nav font-weight-bold mx-auto py-0">
                   <Link to="/" className="nav-item nav-link">Home</Link>
                   <Link to="/about" className="nav-item nav-link">About</Link>
                   <Link to="/classname" className="nav-item nav-link">classNamees</Link>
                   <Link to="/teachers" className="nav-item nav-link">Teachers</Link>
                   <Link to="/gallary" className="nav-item nav-link">Gallery</Link>
                   
                   <div className="nav-item dropdown">
                     <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                     <div className="dropdown-menu rounded-0 m-0">
                       <Link to="/page1" className="dropdown-item">page1</Link>
                       <Link to="/page2" className="dropdown-item">page2</Link>
                     </div>
                   </div>

                   <Link to="contact" className="nav-item nav-link">Contact</Link>
                 </div>
                 <Link to="#" className="btn btn-primary px-4">Join className</Link>
         </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar