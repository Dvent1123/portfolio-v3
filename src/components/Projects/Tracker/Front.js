import React from 'react'
import Portfolio from '../../../assets/images/Portfolio.svg'

const Front = () => {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" alt="Portfolio" src={Portfolio}></img>
                <h1 className="title">My Portfolio</h1>
            </div>
            <div className="main-area">
                <div className="blog-post">
                <p className="date">{new Date().toLocaleDateString()}</p>
                <p className="blog-content">
                    Some sample text to demonstrate how these cards will work, including how they truncate long sentences.</p>
                <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        </div>
    )
}

export default Front
