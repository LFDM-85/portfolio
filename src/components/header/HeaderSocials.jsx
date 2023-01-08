import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/luisfdmelo/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/LFDM-85">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
