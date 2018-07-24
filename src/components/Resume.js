import React from 'react'
import Page from '../components/Page.js'


const Resume = () => {
  return (
    <Page>
      <div className='resume main-content'>
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
        <div className='myResume work'>
          <h2 className='resume-tag'>Work Experience</h2>
          
          <div className='skills work-exp'>
            <div className='work-header'>
              <h4>Fullstack Academy Of Code</h4>
              <h5>Teaching Fellow at Fullstack Academy of Code for Grace Hopper Program</h5>
              <h5>June 2o18 - Present</h5>
            </div>
            <ul className='work-description'>
              <li>Helped students debug their code and answered technical questions</li>
              <li>Conducted programming interviews for admissions</li>
              <li>Assisted in code reviews</li>
          </ul>
          </div>

          <div className='skills work-exp'>
            <div className='work-header'>
              <h4>Happy Bones NYC</h4>
              <h5>Manager | Barista</h5>
              <h5>July 2o15 - January 2o18</h5>
            </div>
            <ul className='work-description'>
              <li>Managed a team of 6+ individuals</li>
              <li>Hired and trained staff</li>
              <li>Prepared specialty drinks</li>
              <li>Ensured 100% customer service satisfaction and superb customer service</li>
          </ul>
          </div>

          <div className='skills work-exp'>
            <div className='work-header'>
              <h4>Ninth Street Espresso</h4>
              <h5>Manager | Barista</h5>
              <h5>July 2o15 - January 2o18</h5>
            </div>
            <ul className='work-description'>
              <li>Made specialty drinks to order</li>
              <li>Expedited smooth and professional service</li>
              <li>Handled daily ordering and organization</li>
            </ul>
            </div>

          <div className='myResume educationDiv'>
            <h2 className='resume-tag'>Education</h2>
            <div className='skills education'>
              <div className='education-header'>
                <h4>Grace Hopper Program at Fullstack Academy of Code</h4>
                <h6>Fullstack JavaScript Developer</h6>
                <h5>January 2o18 - May 2o18</h5>
              </div>
            </div>

            <div className='skills education'>
              <div className='education-header' id='break'>
                <h4>Fashion Institute of Technology</h4>
                <h5>BFA in Illustration</h5>
                <h5 className='spacer'>August 2oo3 - August 2oo7</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}


export default Resume
