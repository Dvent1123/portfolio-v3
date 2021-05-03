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
                <p className="blog-content">
                You're looking at it. I made this portfolio to showcase some of the work I've done and to have a single place to
                    reference for projects I am proud of. I made this on the React framework and I have it hosted on Netlify since it
                    is a single page application. I also have the contact form hosted through Netlfiy Forms.
                </p>
                <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        </div>
    )
}

export default Front
