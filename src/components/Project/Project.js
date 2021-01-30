import React from 'react';
import './Project.css';
import House1 from '../../images/house-1.jpg';
import House2 from '../../images/house-2.jpg';
import House5 from '../../images/house-5.jpg';
import House6 from '../../images/house-6.jpg';

const Project = () => {
  return (
    <>
      <div className='full-content' id='projects'>
        <div className='header-text'>
          <h2>Projek Terbaru</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            est voluptas in qui quasi assumenda.
          </p>
        </div>
        <div className='content-box'>
          <div className='content-box-info'>
            <img src={House1} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Preview</a>
            </div>
          </div>
          <div className='content-box-info'>
            <img src={House2} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Preview</a>
            </div>
          </div>
          <div className='content-box-info'>
            <img src={House1} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Preview</a>
            </div>
          </div>
          <div className='content-box-info'>
            <img src={House6} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Preview</a>
            </div>
          </div>
          <div className='content-box-info'>
            <img src={House5} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Preview</a>
            </div>
          </div>
          <div className='content-box-info'>
            <img src={House6} alt='website foto' className='img-website' />
            <div className='btn-click'>
              <a href='#hero'>Preview</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
