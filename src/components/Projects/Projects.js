import React from 'react'
import ProjectCardRest from './Rest/ProjectCardRest'
import ProjectCardPortfolio from './Portfolio/ProjectCardPortfolio'
import ProjectCardManager from './Manager/ProjectCardManager'
import ProjectCardTracker from './Tracker/ProjectCardTracker'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
                <div className="title-container">
                        <h2>MERN Projects</h2>
                    </div>
                    <div className="projects-container">
                        <ProjectCardRest />
                        <ProjectCardPortfolio />
                        <ProjectCardManager />
                        <ProjectCardTracker />
                    </div>
        </div>
    )
}

export default Projects
