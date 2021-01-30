import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <>
      <div className='services-section' id='services'>
        <div className='inner-width'>
          <h1 className='section-title'>Layanan</h1>
          <div className='border'></div>
          <div className='services-container'>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fas fa-city'></i>
              </div>
              <div className='service-title'>Design</div>
              <div className='service-desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                a autem voluptas asperiores facilis sint.
              </div>
            </div>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fas fa-couch'></i>
              </div>
              <div className='service-title'>Interior Design</div>
              <div className='service-desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                a autem voluptas asperiores facilis sint.
              </div>
            </div>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fas fa-torii-gate'></i>
              </div>
              <div className='service-title'>Build</div>
              <div className='service-desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                a autem voluptas asperiores facilis sint.
              </div>
            </div>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fas fa-building'></i>
              </div>
              <div className='service-title'>Maintenance</div>
              <div className='service-desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                a autem voluptas asperiores facilis sint.
              </div>
            </div>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fas fa-home'></i>
              </div>
              <div className='service-title'>Housing</div>
              <div className='service-desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                a autem voluptas asperiores facilis sint.
              </div>
            </div>
            <div className='service-box'>
              <div className='service-icon'>
                <i className='fas fa-tasks'></i>
              </div>
              <div className='service-title'>Renting</div>
              <div className='service-desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                a autem voluptas asperiores facilis sint.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
