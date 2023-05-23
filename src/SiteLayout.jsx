import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';
import NavBar from "./components/Navbar";

export const SiteLayout = () => {
    
    return (
        <Container>
            <NavBar />
            {/* Renderizamos los componentes según la ruta que le corresponda */}
            <Outlet />
        </Container>
    )
}

export default SiteLayout
