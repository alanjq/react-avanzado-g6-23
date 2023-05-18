import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    
    return (<main>
        header
        <Outlet />
        footer
    </main>)
}

export default Layout
