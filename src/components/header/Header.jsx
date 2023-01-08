import React from 'react';
import './header.css';
import Actions from './Actions';
import Me from '../../assets/me3.png';
import HeaderSocials from './HeaderSocials';
import { BsMouse } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luís Melo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Actions />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          <BsMouse />
        </a>
      </div>
    </header>
  );
};

export default Header;
