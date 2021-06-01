let BootstrapCarousel = () => {
return(
<div>
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img style={{ height: "25rem",padding:"0 0.1%" }} className="d-block w-100" src="https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_640.jpg"
          alt="First slide"></img>
      </div>
      <div className="carousel-item">
        <img style={{ height: "25rem",padding:"0 0.1%" }}  className="d-block w-100" src="https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_640.jpg"
          alt="Second slide"></img>
      </div>

    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
)
}

export default BootstrapCarousel;