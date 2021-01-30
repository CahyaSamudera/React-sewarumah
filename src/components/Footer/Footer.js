import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-content'>
          <h3>Beli Rumah</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab
            accusamus iste aliquid et!
          </p>
          <ul className='socials'>
            <li>
              <a href='#hero'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
            <li>
              <a href='#hero'>
                <i className='fab fa-pinterest'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-bottom'>
          <p>copyright &copy;2021 | Beli Rumah</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
