import './AboutContentStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import WebDev1 from '../assets/webdev1.jpg';
import WebDev2 from '../assets/webdev2.jpg';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About the Developer</h1>
        <p>
          I graduated GA Tech's EDX Full Stack MERN BootCamp. Using MongoDB,
          Express.js, React.js, and Node I have learned to create applications
          from front to back end!
        </p>
        <Link to="/contact">
          <button className="btn btn-light">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={WebDev1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={WebDev2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
