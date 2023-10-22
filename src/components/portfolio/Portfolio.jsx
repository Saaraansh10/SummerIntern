import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>Snake Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saaraansh10/Snake-Game" className='btn' target='_blank'>Github</a>
          <a href="https://saaraansh10.github.io/Snake-Game/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="img2" />
          </div>
          <h3>Action Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saaraansh10/Action-Game" className='btn' target='_blank'>Github</a>
          <a href="https://saaraansh10.github.io/Action-Game/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="img4" />
          </div>
          <h3>Tic-Tac-Toe Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saaraansh10/Tic-Tac-Toe-Game" className='btn' target='_blank'>Github</a>
          <a href="https://saaraansh10.github.io/Tic-Tac-Toe-Game/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="img3" />
          </div>
          <h3>Analog Clock</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saaraansh10/Analog-Clock" className='btn' target='_blank'>Github</a>
          <a href="https://saaraansh10.github.io/Analog-Clock/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="img5" />
          </div>
          <h3>Portfolio Web using HTML/CSS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Saaraansh10/saaraanshmishraportfolio" className='btn' target='_blank'>Github</a>
          <a href="https://saaraansh10.github.io/saaraanshmishraportfolio/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="img6" />
          </div>
          <h3>Portfolio Web Using ReactJs</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio