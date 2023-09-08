import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
export const SiteLayout = () => {

    return (
        <>
            <NavBar />
            <Container>
                {/* Renderizamos los componentes según la ruta que le corresponda */}
                <Outlet />
                
            </Container>
            <Footer />
        </>
    )
}

export default SiteLayout
