import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive('#services')}
        className={active === '#services' ? 'active' : ''}
      >
        <BsGear />
      </a>
      <a
        href="#contacts"
        onClick={() => setActive('#contacts')}
        className={active === '#contacts' ? 'active' : ''}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
