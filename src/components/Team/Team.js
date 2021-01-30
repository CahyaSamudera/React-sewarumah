import React from 'react';
import './Team.css';
import Team1 from '../../images/team-8.jpg';
import Team2 from '../../images/team-6.jpg';
import Team3 from '../../images/team-7.jpg';

const Team = () => {
  return (
    <>
      <div className='team-section' id='team'>
        <h1>Tim Kami</h1>
        <div className='team-container'>
          <div className='our-team'>
            <div className='pic'>
              <img src={Team1} alt='' />
            </div>
            <div className='team-content'>
              <h3 className='title'>Indira</h3>
              <span className='post'>Designer</span>
            </div>
            <ul className='social'>
              <li>
                <a href='#hero'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='our-team'>
            <div className='pic'>
              <img src={Team2} alt='' />
            </div>
            <div className='team-content'>
              <h3 className='title'>Andra</h3>
              <span className='post'>Marketing</span>
            </div>
            <ul className='social'>
              <li>
                <a href='#hero'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='our-team'>
            <div className='pic'>
              <img src={Team3} alt='' />
            </div>
            <div className='team-content'>
              <h3 className='title'>Ahsan</h3>
              <span className='post'>Finance</span>
            </div>
            <ul className='social'>
              <li>
                <a href='#hero'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#hero'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
