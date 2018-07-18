import React from 'react'
import './styles/projects.css'
import anbeI from '../images/anbeI.jpg'
import anbeL from '../images/anbeCom.jpg'
// import donke from '../images/donke.jpg'

const Projects = () => {
  return (
    <div className="projects">

      <div id='anbePortfolio'>
        <p id='anbeText'>Anbe Baccam is an emerging photographer, and I really wanted to showcase his work in a simple way to allow the beauty of his photography to speak for itself, without too much destruction and noise.
        </p>
        <div className='images'>
          <img src={anbeL} id="anbeComputer" alt="laptopImage" />
          <img src={anbeI} id='anbeIphone' alt='iphoneImage' />
        </div>
        <div className='projLinks'>
          <a className='grad1' href='https://github.com/Mightynumnums/anbe2'>GITHUB</a>
          <a className='grad1' href='https://anbebaccamportfolio.herokuapp.com/'>WEBSITE</a>
        </div>



        {/* donke project*/}
        <div id='donke'>
          <p id='donkeText'>The creation of Donke was inspired by inflamed backs and asleep legs.
        </p>
          <div className='images'>
            {/* <img src={donke} id="donkeDesktop" alt="donkeImg" /> */}
            <img src={anbeL} id="anbeComputer" alt="laptopImage" />
          </div>
          <div className='projLinks'>
            <a href='https://github.com/teamCrabby/donke'>GITHUB</a>
            <a href='https://buddy-4f263.firebaseapp.com/'>WEBSITE</a>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Projects