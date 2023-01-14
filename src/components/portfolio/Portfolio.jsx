import React from 'react';
import './portfolio.css';
import pj01 from '../../assets/Project_elearning_image.png';
import pj02 from '../../assets/worldsearch.png';
import pj03 from '../../assets/weatherapp.png';
import pj04 from '../../assets/yancy-min-842ofHC6MaI-unsplash.jpg';

// TODO: create a server api to show my projects
// INFO: for now hardcoded data

const data = [
  {
    id: 1,
    image: pj01,
    title: 'E-le@rn - Under development',
    github: 'https://github.com/LFDM-85/Frontend',
    demo: 'https://frontendtest-livid.vercel.app/',
  },
  {
    id: 2,
    image: pj02,
    title: 'World Search',
    github: 'https://github.com/LFDM-85/worldSearch',
    demo: 'https://world-search-tau.vercel.app/',
  },
  {
    id: 3,
    image: pj03,
    title: 'Local Weather App',
    github: 'https://github.com/LFDM-85/weather-app',
    demo: 'https://weatherapp-blush-two.vercel.app/',
  },
  {
    id: 4,
    image: pj04,
    title: 'More projects on Github',
    github: 'https://github.com/LFDM-85/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-actions">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
