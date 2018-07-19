import React from 'react'
import profilePic from '../images/aleks.jpg'
import './styles/home.css'

const Home = () => {
  return (
    <div className="main">
      <div className='bio'>
        <p id='bioText'>Hi there! I'm Aleks and I am a software developer with a keen eye for design.
        Originally from Russia, I've been told that I have a tone and a bit of tude. None of those things are true, all I want to do is make cool pretty looking shit.
        <br />
          I am a fullstack JavaScript developer keen on working with excited and passionate individuals who want to get things done and are interested in making this dirty world just a little bit more beautiful and a little bit more smart.
          </p>
        <img src={profilePic} className="profile bio" alt="selfImg" />

        <div className='skills'>
          <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostreSQL</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>React-Redux</li>
          </ul>

          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>FlexBox</li>
            <li>Green Sock Library</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Webpack</li>
          </ul>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home
