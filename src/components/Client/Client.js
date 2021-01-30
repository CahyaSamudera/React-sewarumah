import React from 'react';
import './Client.css';
import ImageA from '../../images/client/1.png';
import Imagea from '../../images/client/1-1.png';
import ImageB from '../../images/client/2.png';
import Imageb from '../../images/client/2-2.png';
import ImageC from '../../images/client/3.png';
import Imagec from '../../images/client/3-3.png';
import ImageD from '../../images/client/4.png';
import Imaged from '../../images/client/4-4.png';
import ImageE from '../../images/client/5.png';
import Imagee from '../../images/client/5-5.png';
import ImageF from '../../images/client/6.png';
import Imagef from '../../images/client/6-6.png';

const Client = () => {
  return (
    <div className='client-section'>
      <div className='client-title'>
        <h2>Partner Kami</h2>
      </div>
      <div className='our-clients'>
        <ul>
          <li>
            <img src={ImageA} alt='' /> <img src={Imagea} alt='' />
          </li>
          <li>
            <img src={ImageB} alt='' /> <img src={Imageb} alt='' />
          </li>
          <li>
            <img src={ImageC} alt='' /> <img src={Imagec} alt='' />
          </li>
          <li>
            <img src={ImageD} alt='' /> <img src={Imaged} alt='' />
          </li>
          <li>
            <img src={ImageE} alt='' /> <img src={Imagee} alt='' />
          </li>
          <li>
            <img src={ImageF} alt='' /> <img src={Imagef} alt='' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Client;
