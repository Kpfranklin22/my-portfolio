import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <HeroImg2
        heading="ABOUT."
        text="I am a full stack MERN junior web developer."
      />
      <AboutContent />
    </div>
  );
};

export default About;