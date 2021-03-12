import React, { useState } from 'react'
import Front from './Front'
import Back from './Back'

const ProjectCardComing = () => {
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
                    <a className="button-a-git" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">Github</a></button>
                <button className="demo-button">
                    <a className="button-a-demo" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
            </div>
        </div>
    )
}

export default ProjectCardComing
