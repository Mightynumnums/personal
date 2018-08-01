import React from 'react'
import anbeI from '../images/anbeTablet.png'
import anbeL from '../images/anbeClear.png'
import donke from '../images/Donke.png'
import Page from '../components/Page.js'
import './styles/projects.css'

const Projects = () => {
  return (
    <Page>
      <div className="projects">
        <div id='anbePortfolio'>
          <h2 className='projDescr name'>Anbe Baccam</h2>
          <p className='projDescr'>Anbe Baccam is an emerging photographer. When I was building his website, I really wanted to showcase his work in a simple way. It was important to me, to let the beauty of his work to speak for itself, without too much disruption or noise.
        <br />
            This website is the first that I've ever built. Ituses HTML and CSS, with some small amount of JavaScript and JQuery. Working on it made me fall in love with programming. It helped me understand how my passion for design and illustration fit together with tech.
        </p>
          <div className='images'>
            <img src={anbeL} alt="laptopImage" />
            <img src={anbeI} alt='iphoneImage' />
          </div>
          <div className='projLinks'>
            <a href='https://github.com/Mightynumnums/anbe2'>GITHUB</a>
            <a href='https://anbebaccamportfolio.herokuapp.com/'>WEBSITE</a>
          </div>


          {/* donke project*/}
          <div id='donkeDiv'>
            <p className='projDescr'>The creation of Donke was inspired by inflamed backs and asleep legs.
          <br />
              Donke is a native application created using Electron paltform. It is build with React.js for front end, Redux for state managemet, Green Sock Library for animations, and FireStore for data management and real time updates.
              Donke encourages users to take care of their wellbeing by taking consistent breaks during their work day.
              My team and I have incorporated a playpen functionality that allows users to interact with other avitars.
              It is a playful application that dreams to help people to be healthier, active and in tern more productive, even if they must sit behind the desk all day.
        </p>
            <div className='images'>
              <img src={donke} id="donker" alt="laptopImage" />
              <iframe id='donke-video' width="460" height="315" title='Donke' src="https://www.youtube.com/embed/xlSb_pJ16g4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className='projLinks'>
              <a href='https://github.com/teamCrabby/donke'>GITHUB</a>
              <a href='https://buddy-4f263.firebaseapp.com/'>WEBSITE</a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Projects

