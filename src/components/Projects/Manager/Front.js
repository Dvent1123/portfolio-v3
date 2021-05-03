import React from 'react'
import Dashboard from '../../../assets/images/Dashboard.svg'

const Front = () => {
    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" alt="Coming Soon" src={Dashboard}></img>
                <h1 className="title">Task Manager</h1>
            </div>
            <div className="main-area">
                <div className="blog-post">
                <p className="blog-content">
                    My rendition of a To-Do App that has user auth using JWT and has real time data using SocketIO.
                    The front-end is built using React and the backend uses Express and NodeJS as well as MongoDB.
                    This project allows for multiple users to work on a single task and has user permissions to differentiate
                    between a user or admin using in house middleware.
                </p>
                <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        </div>
    )
}

export default Front
