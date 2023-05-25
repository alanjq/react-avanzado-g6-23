import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer"

export const SiteLayout = () => {
    
    return (
        <Container>
            <NavBar />
            {/* Renderizamos los componentes según la ruta que le corresponda */}
            <Outlet />
            <Footer></Footer>
        </Container>
    )
}

export default SiteLayout
