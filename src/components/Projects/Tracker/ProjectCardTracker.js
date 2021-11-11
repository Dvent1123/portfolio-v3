import React, { useState } from 'react'
import Front from './Front'
import Back from './Back'

const ProjectCardTracker = () => {
    const [flipped, setFlipped] = useState(false)

    let flip = () => {
        setFlipped(!flipped)
    }

    return (
        <div className="card-container-total">
            <div onMouseEnter={flip} onMouseLeave={flip} className={`card-container${flipped ? " flipped" : ""}`}>
                <Front />
                <Back />
            </div>
            <div className="card-button-container">
                <button className="git-button">
                    <a className='button-a-git' href="https://github.com/Dvent1123/calisthenics-tracker-api" target="_blank" rel="noopener noreferrer">Github API</a></button>
                    <button className="git-button">
                    <a className='button-a-git' href="https://github.com/Dvent1123/calisthenics-tracker-client" target="_blank" rel="noopener noreferrer">Github Client</a></button>
                <button className="demo-button">
                    <a className='button-a-demo' href="https://exercisemaphub.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
            </div>            
        </div>
    )
}

export default ProjectCardTracker
