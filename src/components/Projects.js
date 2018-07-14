import React from 'react'
import './styles/projects.css'
import anbeI from '../images/anbeI.jpg'
import anbeL from '../images/anbeCom.jpg'

const Projects = () => {
  return (
    <div className="projects">
      <div id='anbePortfolio'>
        <p id='anbeText'>Anbe Baccam is an emerging photographer, and I really wanted to showcase his work in a simple way to allow the beauty of his photography to speak for itself, without too much destruction and noise.
        </p>
        <div className='images'>
          <img src={anbeI} id='anbeIphone' alt='iphoneImage' />
          <img src={anbeL} id="anbeComputer" alt="laptopImage" />
        </div>
      </div>

    </div >
  );
}
export default Projects