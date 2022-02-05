import React from 'react';
import Product from './Product'

const Home = () => {
  return (
      <>
          <div id="carouselExampleIndicators" className="carousel slide bg-dark container" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner mt-3 mb-5">
    <div className="carousel-item active">
      <img src="/images/home/galaxy-a71.jpg" className="d-block w-100" alt="sumsung" height="650px" />
    </div>
    <div className="carousel-item">
      <img src="/images/home/samsung-galaxy-a12.jpg" className="d-block w-100" alt="sumsung" height="650px" />
    </div>
    <div className="carousel-item">
      <img src="/images/home/samsung-galaxy-a22.jpg" className="d-block w-100" alt="sumsung" height="650px"/>
    </div>
    <div className="carousel-item">
      <img src="/images/home/samsung-galaxy-a72.jpg" className="d-block w-100" alt="sumsung" height="650px"  />
    </div>
    <div className="carousel-item">
      <img src="/images/home/samsung-galaxy-s10.jpg" className="d-block w-100" alt="sumsung" height="650px"  />
    </div>
    <div className="carousel-item">
      <img src="/images/home/samsung-galaxy-s20.jpg" className="d-block w-100" alt="sumsung" height="650px"  />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <Product />
      </>
  )
};

export default Home;