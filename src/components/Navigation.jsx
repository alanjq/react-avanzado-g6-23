import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (<nav>
        <Link to="/">Home </Link>
        <Link to="/about">Acerca de </Link>
        <Link to="/contact">Contacto </Link>

        {/* <a href="https://google.com">Enlace externo</a> */}
    </nav>)
}
export default Navigation