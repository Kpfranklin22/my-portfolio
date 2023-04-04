import React from 'react';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import pdf from '../assets/resume.pdf';
import Button from 'react-bootstrap/Button';

const Resume = () => {
  return (
    <div>
      <HeroImg2
        heading="RESUME."
        text="Click the yellow button below to view or download!"
      />
      <div class="btn-center">
      <Button style={{ position: 'relative'}} href={pdf}>
        CLICK HERE
      </Button>
      </div>
      <AboutContent />
    </div>
  );
};

export default Resume;
