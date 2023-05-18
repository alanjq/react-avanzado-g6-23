import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    return (<header className="container bg-primary">
        <div className="row">
            <div className="col-md-6">
                React + Bootstrap
            </div>
            <nav className="col-md-6 text-right">
                <Link to="/" style={{ color: "white" }}>
                    Inicio
                </Link>
            </nav>
        </div>
    </header>)
}

export default Header
