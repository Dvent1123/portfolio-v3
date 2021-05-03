import React from 'react'
import Restaurant from '../../../assets/images/Tracker.svg'

const Front = () => {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" alt="Restaurant Website" src={Restaurant}></img>
                <h1 className="title">Calisthenics Tracker</h1>
            </div>
            <div className="main-area">
                <div className="blog-post">
                <p className="blog-content">
                    A passion project to help people in the calisthenics to track their skills. I had not found
                    a place where there was a decent list of calisthenics skills so I decided to make one. It is loosely based
                    off of a "100 Places to Go Before I Die" map but instead of places I wanted it to be a fun way for atheletes to
                    see how many calisthenics skills they have crossed off.
                </p>
                <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        </div>
    )
}

export default Front
