import React from 'react';
import './experience.css';
import { ImHtmlFive2 } from 'react-icons/im';
import { TbBrandCss3 } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiMaterialui } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { SiNestjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive2 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>ExpressJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNestjs className="experience__details-icon" />
              <div>
                <h4>NestJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
