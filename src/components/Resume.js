import React from 'react'
import Navbar from './Navbar'


const Resume = () => {
  return (
    <div className='resume main-content'>
      <Navbar />
      <h3>Resume</h3>
      <div className='myResume'>
        <h2>Technologies</h2>
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

    </div>
  )
}


export default Resume
