import React from 'react'
import profilePic from '../images/aleks.jpg'
import './styles/home.css'
import Navbar from './Navbar';


const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <div className='bio'>
        <p>Give some description here</p>

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
    </div >
  );
}

export default Home
