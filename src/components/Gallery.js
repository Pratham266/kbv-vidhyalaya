import React,{useState} from 'react'
import Footer from './Footer'
import Menu from './menu'

function Gallery() {
  const[items,setItems]=useState(Menu);
  const filterItem = (cateItem)=>{
    const updatedItems = Menu.filter((curElem)=>{
      return curElem.category === cateItem;
    });
    setItems(updatedItems);
  }
  return (
    <>
  {/* Gallery start*/}
  <div className="container-fluid bg-primary mb-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{minHeight: '400px'}}
      >
        <h3 className="display-3 font-weight-bold text-white">Gallery</h3>
        <div className="d-inline-flex text-white">
        </div>
      </div>
    </div>
   
    <div className="container-fluid pt-5 pb-3">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Our Gallery</span>
          </p>
          <h1 className="mb-4">Our Kids School Gallery</h1>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li className="btn btn-outline-primary m-1 active" data-filter="*" onClick={()=>setItems(Menu)}>
                All
              </li>
              <li className="btn btn-outline-primary m-1" data-filter=".first" onClick={()=>filterItem('about')}>
                About
              </li>
              <li className="btn btn-outline-primary m-1" data-filter=".second" onClick={()=>filterItem('blog')}>
                Blog
              </li>
              <li className="btn btn-outline-primary m-1" data-filter=".third" onClick={()=>filterItem('portfolio')}>
                Portfolio
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row portfolio-container">
          
          {
            items.map((elem)=>{
              const {id,image,category}=elem;
              return (
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                      <img className="img-fluid w-100" src={image} alt="" />
                      <div
                       className="portfolio-btn bg-primary d-flex align-items-center justify-content-center"
                      >
                     <a href={image} data-lightbox="portfolio">
                      <i className="fa fa-plus text-white" style={{fontsize: '60px'}}></i>
                    </a>
                  </div>
                </div>
              </div>
              )
            })
          }
          
        
        </div>



      </div>
    </div>
    
  <Footer/>
  </>
  )
}

export default Gallery
