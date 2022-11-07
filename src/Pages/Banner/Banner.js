import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full slideBer">
    <img src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg" alt=''  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full slideBer">
    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/7577327_top%20historical%20places%20Dhaka.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full slideBer">
    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/8697043_7725621_New%20Project%20(4).jpg" alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;