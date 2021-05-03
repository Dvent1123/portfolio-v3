import React from 'react'
import Leaf from '../../../assets/images/Leaf.svg'
const Front = () => {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" alt="Portfolio" src={Leaf}></img>
                <h1 className="title">Tapuya Brands</h1>
            </div>
            <div className="main-area">
                <div className="blog-post">
                <p className="blog-content">
                    This was a freelance WordPress Project that I did for Tapuya Brands, a small E-Commerce acquisition's company. 
                    I worked with them to add a few new features to their existing WordPress site as well as debug some issues.
                </p>
                <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        </div>
    )
}

export default Front
