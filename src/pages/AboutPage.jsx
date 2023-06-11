import React from "react";

export function AboutPage()
{
    const mainStyle = {
        textAlign: 'center',
        fontSize: '2rem',
        fontFamily: 'monospace',
        marginTop: "50px",
    };
    return(
        <main>
            

            <div style={mainStyle}>
                <p>Este es un proyecto final para el curso de React</p>
            </div>
        </main>
    )
}

export default AboutPage
