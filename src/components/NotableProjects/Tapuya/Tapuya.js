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
                <button className="demo-button">
                    <a className='button-a-demo' href="https://tapuyabrands.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
            </div>   
        </div>

    )
}

export default ProjectCardTracker
