import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full img-color mt-5">
  <div id="slide1" className="carousel-item relative w-full slideBer">
   
    <img src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg" alt=''  className="w-full" />
  
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
      <div>
      <h3 className='text-white text-5xl font-bold'>Welcome to visited<br /> Tourist Guide</h3>
      <p className='text-xl text-white mt-3'>Bangladesh, to the east of India on the Bay of Bengal, <br /> is a South Asian country marked by lush greenery and many waterways.</p>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4 bg-orange-600">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full slideBer">
    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/7577327_top%20historical%20places%20Dhaka.jpg" alt='' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
      <div>
      <h3 className='text-white text-5xl font-bold'>Welcome to visited<br /> Tourist Guide</h3>
      <p className='text-xl text-white mt-3'>Bangladesh, to the east of India on the Bay of Bengal, <br /> is a South Asian country marked by lush greenery and many waterways.</p>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4 bg-orange-600">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-orange-600">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full slideBer">
    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/8697043_7725621_New%20Project%20(4).jpg" alt='' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
      <div>
      <h3 className='text-white text-5xl font-bold'>Welcome to visited<br /> Tourist Guide</h3>
      <p className='text-xl text-white mt-3'>Bangladesh, to the east of India on the Bay of Bengal, <br /> is a South Asian country marked by lush greenery and many waterways.</p>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4 bg-orange-600">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;