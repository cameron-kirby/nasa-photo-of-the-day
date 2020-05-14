import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    background-color: #FC3D21;
    padding: 0.1% 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;

    h1 {
        color: #ffffff;
    }
`

export default function Heading(props) {
    return (
        <HeaderStyle>
            <h1>Nasa Astronomy Photo of the Day</h1>
        </HeaderStyle>
    )
}