import React from 'react'

function Youtube() {
  return (
    <>
    <div className="container-fluid pt-5">
    <div className="container">
    <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Youtube</span>
          </p>
          <h1 className="mb-4">School Video</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <iframe width="350" height="200" src="https://youtube.com/embed/L9sLFj9vHcM?autoplay=1">
    </iframe>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe width="350" height="200" src="https://www.youtube.com/embed/WYaKm4ephDo?autoplay=1">
    </iframe>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe width="350" height="200" src="https://www.youtube.com/embed/gztRY2RNIj4?autoplay=1">
    </iframe>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default Youtube
