import React from 'react'
import Footer from './Footer'
import Inner_about from './Inner_about'

function About() {
  return (
    <>
    <div>
      <div className="container-fluid bg-primary mb-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{minHeight: '400px'}}
      >
        <h3 className="display-3 font-weight-bold text-white">About Us</h3>
        <div className="d-inline-flex text-white">
        </div>
      </div>
    </div>
  </div>
  <Inner_about/>
  <Footer/>
  </>
  )
}

export default About
