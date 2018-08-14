import React from 'react'
import Page from '../components/Page.js'
import data from '../projectData.js'
import './styles/projects.css'

export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: data
    }
  }

  render() {
    return (
      <Page>
        <div className='projectMain'>

          {this.state.projects.map(project => {
            return (
              <div className='hover-container' key={project.description}>
                <div className='imageContainer'>
                  <img src={project.image.src} alt={project.image.alt} />
                </div>
                <div className='image-hover-text-overlay'>
                  <div className='overlay-content'>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className='container projLinks'>
                  <a href={project.links.ghUrl}>{project.links.github}</a>
                  <a href={project.links.webUrl}>{project.links.website}</a>
                </div>
              </div>
            )
          })}
        </div>
      </Page>
    );
  }
}



