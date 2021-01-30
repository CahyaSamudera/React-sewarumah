import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className='wrap' id='hero'>
        <div className='content'>
          <h1>Miliki Rumah Impianmu</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className='btn-group'>
            <a href='#hero' className='color1'>
              Beli Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
