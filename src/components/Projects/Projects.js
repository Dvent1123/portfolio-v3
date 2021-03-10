import React from 'react'
import ProjectCardDashboard from './Dashboard/ProjectCardDashboard'
import ProjectCardComing from './Coming/ProjectCardComing'
import ProjectCardTracker from './Tracker/ProjectCardTracker'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
                <div className="title-container">
                        <h2>Projects</h2>
                    </div>
                    <div className="projects-container">
                        <ProjectCardDashboard />
                        <ProjectCardTracker />
                        <ProjectCardComing />
                    </div>
        </div>
    )
}

export default Projects
