import './FooterStyles.css';
import React from 'react';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>390 Pound Street - Athens, Georgia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              706-286-0303
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              kpfranklin22@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Developer</h4>
          <p>
            A hardworking, honest, dependable worker with a sense of humor who
            is still kid at heart! I love skateboarding, video games,
            collectibles, and 90s saturday morning cartoons. I enjoy spending
            time trying new foods and visiting new places with friends! My aim
            is to bring my lust for life, child-like wonder, and creativity to
            every space I inhabit and to push the limits of what I'm capable of!
            I'm looking to join your team or take on your projects!
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/kyle-franklin-493906258/">
              <FaLinkedin
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
            </a>

            <a href="https://github.com/Kpfranklin22">
              <FaGithub
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
