import React from 'react'
import Footer from './Footer'
import Inner_about from './Inner_about'

function Home() {
  return (
    <>
      {/* HEADER SECTION*/}
      <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
      <div className="row align-items-center px-3">
        <div className="col-lg-6 text-center text-lg-left">
          <h4 className="text-white mb-4 mt-5 mt-lg-0">Shree Ganeshay Namah</h4>
          <h1 className="display-3 font-weight-bold text-white">
              Shreemati Kamlaben Badhir Vidhyalaya
          </h1>
          <p className="text-white mb-4">
            Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed
            sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
            ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
            dolore.
          </p>
          <a href="" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <img className="img-fluid mt-5" style={{height:'600px',width:'750px'}}src="img/school.png" alt="" />
        </div>
      </div>
    </div>
    <Inner_about/>

    {/*class*/}
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Popular Classes</span>
          </p>
          <h1 className="mb-4">Classes for Your Kids</h1>
        </div>
        <div className="row">


        <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src="img/class-1.jpg" alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">Drawing Class</h4>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 py-1">3 - 6 Years</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6 py-1">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
                <div className="row">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 py-1">$290 / Month</div>
                </div>
              </div>
              <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
            </div>
          </div>

          <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src="img/class-1.jpg" alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">Drawing Class</h4>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 py-1">3 - 6 Years</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6 py-1">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
                <div className="row">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 py-1">$290 / Month</div>
                </div>
              </div>
              <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
            </div>
          </div>

          <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src="img/class-1.jpg" alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">Drawing Class</h4>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 py-1">3 - 6 Years</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6 py-1">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
                <div className="row">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 py-1">$290 / Month</div>
                </div>
              </div>
              <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Registration cart*/}
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <p className="section-title pr-5">
              <span className="pr-2">Book A Seat</span>
            </p>
            <h1 className="mb-4">Book A Seat For Your Kid</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="list-inline m-0">
              <li className="py-2">
                <i className="fa fa-check text-success mr-3"></i>Labore eos amet
                dolor amet diam
              </li>
              <li className="py-2">
                <i className="fa fa-check text-success mr-3"></i>Etsea et sit dolor
                amet ipsum
              </li>
              <li className="py-2">
                <i className="fa fa-check text-success mr-3"></i>Diam dolor diam
                elitripsum vero.
              </li>
            </ul>
            <a href="" className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-secondary text-center p-4">
                <h1 className="text-white m-0">Book A Seat</h1>
              </div>
              <div className="card-body rounded-bottom bg-primary p-5">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{height:'47px'}}
                    >
                      <option selected>Select A Class</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 1</option>
                      <option value="3">Class 1</option>
                    </select>
                  </div>
                  <div>
                    <button
                      className="btn btn-secondary btn-block border-0 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    {/*testimonial*/}
    {/* Blog*/}
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Latest Blog</span>
          </p>
          <h1 className="mb-4">Latest Articles From Blog</h1>
        </div>
        <div className="row pb-3">
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-1.jpg" alt="" />
              <div className="card-body bg-light text-center p-4">
                <h4 className="">Diam amet eos at no eos</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"
                    ><i className="fa fa-user text-primary"></i> Admin</small
                  >
                  <small className="mr-3"
                    ><i className="fa fa-folder text-primary"></i> Web Design</small
                  >
                  <small className="mr-3"
                    ><i className="fa fa-comments text-primary"></i> 15</small
                  >
                </div>
                <p>
                  Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                  eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                  lorem. Tempor ipsum justo amet stet...
                </p>
                <a href="" className="btn btn-primary px-4 mx-auto my-2"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-2.jpg" alt="" />
              <div className="card-body bg-light text-center p-4">
                <h4 className="">Diam amet eos at no eos</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"
                    ><i className="fa fa-user text-primary"></i> Admin</small
                  >
                  <small className="mr-3"
                    ><i className="fa fa-folder text-primary"></i> Web Design</small
                  >
                  <small className="mr-3"
                    ><i className="fa fa-comments text-primary"></i> 15</small
                  >
                </div>
                <p>
                  Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                  eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                  lorem. Tempor ipsum justo amet stet...
                </p>
                <a href="" className="btn btn-primary px-4 mx-auto my-2"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-3.jpg" alt="" />
              <div className="card-body bg-light text-center p-4">
                <h4 className="">Diam amet eos at no eos</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"
                    ><i className="fa fa-user text-primary"></i> Admin</small
                  >
                  <small className="mr-3"
                    ><i className="fa fa-folder text-primary"></i> Web Design</small
                  >
                  <small className="mr-3"
                    ><i className="fa fa-comments text-primary"></i> 15</small
                  >
                </div>
                <p>
                  Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                  eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                  lorem. Tempor ipsum justo amet stet...
                </p>
                <a href="" className="btn btn-primary px-4 mx-auto my-2"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
