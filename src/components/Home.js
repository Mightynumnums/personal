import React from 'react'
import profilePic from '../images/aleks.jpg'
import Navbar from './Navbar'
import Footer from './Footer'


const Home = () => {
  return (
    <div className="main main-content">
      <Navbar />
      <div className='bio'>
        <p>Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.Give some description here.</p>

        <img src={profilePic} className="profile bio" alt="selfImg" />

        <div className='skills'>
          <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostreSQL</li>
            <li>Redux</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>React-Redux</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Webpack</li>
          </ul>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>FlexBox</li>
            <li>Green Sock Library</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Home
