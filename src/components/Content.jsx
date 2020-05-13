import React, { useState, useEffect } from 'react'

export default function Content(props) {
    const nasaData = props.nasaData

    return (
        <div className="content-container">
            <p>Hello! I am The Content</p>
            <div className="photo">
                <h2 className="title">{nasaData.title}</h2>
                <img src={nasaData.hdurl} alt={nasaData.title} />
                <p className="description">{nasaData.explanation}</p>
            </div> 
        </div>
    )
}