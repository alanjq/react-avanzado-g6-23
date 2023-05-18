import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const TEXT_WHITE = {
        color: "white"
    }

    return (<header className="container bg-primary">
        <div className="row">
            <div className="col-md-6">
                React + Bootstrap
            </div>
            <nav className="col-md-6 text-right">
                <Link to="/" style={TEXT_WHITE}>
                    Inicio
                </Link>
            </nav>
        </div>
    </header>)
}

export default Header
