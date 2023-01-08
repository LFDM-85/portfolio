import React from 'react';
import CV from '../../assets/LuisMelo_CV.pdf';

const Actions = () => {
  return (
    <div className="actions">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Actions;
