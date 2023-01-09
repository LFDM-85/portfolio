import React from 'react';
import './about.css';
import Me from '../../assets/me4.jpeg';
import { FaIndustry } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { VscNewFolder } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Coding Experience</h5>
              <small>1 Year</small>
            </article>

            <article className="about__card">
              <FaIndustry className="about__icon" />
              <h5>Industry Experience</h5>
              <small>10 Years</small>
            </article>

            {/* <article className="about__card">
              <VscNewFolder className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a
            alias, laudantium, ratione suscipit fuga molestias quos accusamus
            eius dicta nobis earum cum ducimus. Aperiam laborum error voluptas!
            Minima, excepturi?
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
