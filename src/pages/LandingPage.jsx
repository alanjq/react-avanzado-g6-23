import React from "react";
import {Button} from '@mui/material'
import Welcome from "./Landing/Welcome";
import NavBar from '../components/Navbar'

export const LandingPage = () => {
    
    return (<div>
        <NavBar />
        <Welcome />
        <Button variant="text">Text</Button>
    </div>)
}

export default LandingPage
