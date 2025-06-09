import React from 'react';
import car from '../assets/images/car.png';  

const Hero = () => {
  return (
    <div className='animated-text'>
      <img src={car} alt="car"  height={300} style={{marginTop:'20px'}}/>
    </div>
  );
};

export default Hero;
