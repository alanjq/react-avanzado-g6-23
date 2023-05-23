import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';
import Header from "./components/Header";

export const SiteLayout = () => {
    
    return (
        <Container>
            <Header />
            {/* Renderizamos los componentes según la ruta que le corresponda */}
            <Outlet />
        </Container>
    )
}

export default SiteLayout
