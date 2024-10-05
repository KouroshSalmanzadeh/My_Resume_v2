import React from 'react'


const FirstTitle = ({ title }) => {
    return (
        <div className="title-session bold reveal-right">
            <div className="container">
                <span>{title}</span>
            </div>
        </div>
    )
}

export default FirstTitle