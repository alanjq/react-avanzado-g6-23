import React from "react"
import { Link } from "react-router-dom"

export function NavigationFooter(){

    const footerLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
        fontFamily: 'monospace'
    };

    const footerLinkStyle = {
        color: 'white',
        marginLeft: '1rem',
        textDecoration: 'none',
    };
    return(
        <nav className="footer-links" style={footerLinksStyle}>
            <Link to="/contact" style={footerLinkStyle} className="footer-link">Contacto</Link>
            <Link to="/about" style={footerLinkStyle} className="footer-link">Acerca de nosotros</Link>
        </nav>
    )
}

export default NavigationFooter