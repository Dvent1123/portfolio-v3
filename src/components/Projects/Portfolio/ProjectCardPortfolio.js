import React, { useState } from 'react'
import Front from './Front'
import Back from './Back'

const ProjectCardPortfolio = () => {
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
                    <a className='button-a-git' href="https://github.com/Dvent1123/portfolio-v3" target="_blank" rel="noopener noreferrer">Github</a></button>
            </div>            
        </div>

    )
}

export default ProjectCardPortfolio
