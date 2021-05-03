import React from 'react'
import Restaurant from '../../../assets/images/Restaurant.svg'

const Front = () => {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" alt="Restaurant Website" src={Restaurant}></img>
                <h1 className="title">Restaurant Website</h1>
            </div>
            <div className="main-area">
                <div className="blog-post">
                <p className="blog-content">
                    A freelance React project in which I worked with a local restaurant to develop a web app for them.
                    I used React for the front-end framework and hosted on Netlify since it was a static page. I worked
                    on it til I met their requirements. Their local traffic has
                    increased by 5% since the launch of the site.     
                </p>
                <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        </div>
    )
}

export default Front
