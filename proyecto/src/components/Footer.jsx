import React from 'react';
import NavigationFooter from '../components/NavigationFooter'

export const Footer = () => {

    const footerStyle = {
        backgroundColor: '#1976d2', 
        fontFamily: 'monospace', 
        color: 'white',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        textAlign: 'center',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
    };

    const footerContainerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0rem',
    };

    return (
        <footer style={footerStyle}>
            <div className="footer-container" style={footerContainerStyle}>      
                <NavigationFooter/>
                <p className="footer-text">© 2023 Shopping. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
