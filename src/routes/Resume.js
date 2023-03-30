import React from 'react';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import pdf from '../assets/sample-resume.pdf';
import Button from 'react-bootstrap/Button';

const Resume = () => {
  return (
    <div>
      <HeroImg2
        heading="RESUME."
        text="Click the yellow button below to view or download!"
      />

      <Button style={{ position: 'relative', left: '46.5%' }} href={pdf}>
        CLICK HERE
      </Button>

      <AboutContent />
    </div>
  );
};

export default Resume;
