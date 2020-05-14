import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    padding: 1% 0;
    background-color: #0B3D91;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
`

export default function Footer(props) {
    return (
        <FooterStyle>
            <p>Made by Cameron Kirby, Photos from NASA</p> 
        </FooterStyle>
    )
}