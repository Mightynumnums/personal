import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Page from '../components/Page.js'


const Resume = () => {
  return (
    <Page>
      <div className='resume main-content'>
        <Navbar />
        <div className='myResume'>
          <h2 className='resume-tag'>Technologies</h2>
          <div className='skills'>
            <ul >
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
        <div className='myResume'>
          <h2 className='resume-tag'>Work Experience</h2>
          <div className='skills' id='work-exp'>
            <div className='work-header'>
              <h4>Fullstack Academy Of Code</h4>
              <h5>Teaching Fellow</h5>
              <h6>May 2o18 - Present</h6>
            </div>
            <p id='work-description'>
              Responsibilities include doing things with the things and then creating more things to fdo wuth more id tdhnfi,.
          <br />
              And thenh ddlkhshs kshs jsjhs, ,ote hkkshbs. anfgtreh. Fir treg dhygabs jtefsh  kjsunbd.
          </p>
          </div>

          <div className='skills work-exp'>
            <div className='work-header'>
              <h4>Happy Bones NYC</h4>
              <h5>Manager | Barista</h5>
              <h6>July 2o15 - January 2o18</h6>
            </div>
            <p id='work-description'>
              Store manager who manged the store with the store things happening ath e store wth other tgusv.
              tore manager who manged the store with the store things happening ath e store wth other tgusv
              tore manager who manged the store with the store things happening ath e store wth other tgusv
        <br />
              And thenh ddlkhshs kshs jsjhs, ,ote hkkshbs. anfgtreh. Fir treg dhygabs jtefsh  kjsunbd.
              tore manager who manged the store with the store things happening ath e store wth other tgusv
        </p>
          </div>

          <div className='skills work-exp'>
            <div className='work-header'>
              <h4>Ninth Street Espresso</h4>
              <h5>Manager | Barista</h5>
              <h6>July 2o15 - January 2o18</h6>
            </div>
            <p id='work-description'>
              Store manager who manged the store with the store things happening ath e store wth other tgusv.
              tore manager who manged the store with the store things happening ath e store wth other tgusv
              tore manager who manged the store with the store things happening ath e store wth other tgusv
      <br />
              And thenh ddlkhshs kshs jsjhs, ,ote hkkshbs. anfgtreh. Fir treg dhygabs jtefsh  kjsunbd.
              tore manager who manged the store with the store things happening ath e store wth other tgusv
      </p>
          </div>

          <div className='myResume'>
            <h2 className='resume-tag'>Education</h2>
            <div className='skills education'>
              <div className='education-header'>
                <h4>Grace Hopper Program at Fullstack Academy of Code</h4>
                <h5>Fullstack JavaScript Developer</h5>
                <h6>January 2o18 - May 2o18</h6>
              </div>
            </div>

            <div className='skills education'>
              <div className='education-header' id='break'>
                <h4>Fashion Institute of Technology</h4>
                <h5>BFA in Illustration</h5>
                <h6 className='spacer'>August 2oo3 - August 2oo7</h6>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Page>
  )
}


export default Resume
