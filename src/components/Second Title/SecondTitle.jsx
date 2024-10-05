import React from 'react'

const SecondTitle = ({ title }) => {
    return (
        <div className="second-title reveal-left">
            <div className="container">
                <span>{title}</span>
            </div>
        </div>
    )
}

export default SecondTitle