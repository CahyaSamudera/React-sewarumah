import React from 'react';
import './About.css';
import Showcase from '../../images/group.jpg';

const About = () => {
  return (
    <>
      <section className='section-a' id='about'>
        <div className='container'>
          <div className='image-about'>
            <img src={Showcase} alt='' />
          </div>

          <div>
            <h1>Tentang Kami</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              at ea, ipsa magni facilis cupiditate quibusdam harum dolores quo
              quae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eius
              animi sed delectus quam eveniet cumque nemo expedita suscipit
              provident ab fugit non quisquam assumenda, blanditiis doloremque
              perferendis vitae quis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
