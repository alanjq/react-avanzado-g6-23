/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import imagen from '../logo/G6_SHOP.png';

export function AboutPage()
{
    const mainStyle = {
        textAlign: 'center',
        fontSize: '2rem',
        fontFamily: 'monospace',
        marginTop: "20px",
    };

    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'50px'
    };
    return(
        <main>
            <div style={containerStyles}>
                <img src={imagen} />
            </div>
            <div style={mainStyle}>
                <p>Este es un proyecto final en el que estamos trabajando todos los compañeros 
                para el curso de React</p>
            </div>
        </main>
    )
}

export default AboutPage
