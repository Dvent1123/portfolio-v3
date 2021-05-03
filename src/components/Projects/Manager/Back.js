import React from 'react'

const Back = () => {
    return (
        <div className="back">
            <p>
            My rendition of a To-Do App that has user auth using JWT and has real time data using SocketIO.
                    The front-end is built using React and the backend uses Express and NodeJS as well as MongoDB.
            </p>
            <p>
            This project allows for multiple users to work on a single task and has user permissions to differentiate
                    between a user or admin using in house middleware.
            </p>
        </div>
    )
}

export default Back
