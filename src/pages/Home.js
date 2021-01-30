import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Project from '../components/Project/Project';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Client from '../components/Client/Client';
import Whatsapp from '../components/Whatsapp';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Services />
      <Project />
      <Team />
      <Client />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
