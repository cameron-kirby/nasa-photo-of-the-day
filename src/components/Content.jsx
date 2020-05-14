import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ContentStyle = styled.div`
    display: flex;
    justify-content: center;


    .photo{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;

        h2 {
            
        }

        img {
            max-width:100%;
            max-height:100%;
        }

        p {
            font-size: 1.3rem;
            width: 90%;
            padding-bottom: 5%;
        }
    }

    
`


export default function Content(props) {
    const nasaData = props.nasaData

    return (
        <ContentStyle>
            <div className="photo">
                <h2 className="title">{nasaData.title}</h2>
                <img src={nasaData.hdurl} alt={nasaData.title} />
                <p className="description">{nasaData.explanation}</p>
            </div> 
        </ContentStyle>
    )
}