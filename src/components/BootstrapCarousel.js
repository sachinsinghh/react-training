let BootstrapCarousel = () => {
    return(
        <div >
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://homepages.cae.wisc.edu/~ece533/images/tulips.png" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://homepages.cae.wisc.edu/~ece533/images/serrano.png" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png" alt="Third slide"></img>
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