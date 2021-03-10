import React, { useState } from 'react'
import Front from './Front'
import Back from './Back'

const ProjectCardDashboard = () => {
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
                <button className="git-button">Github</button>
                <button className="demo-button">Live Demo</button>
            </div>            
        </div>
    )
}

export default ProjectCardDashboard
