import React from 'react';
import './footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Luis Melo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/luisfdmelo/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/LFDM-85">
          <FiGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
