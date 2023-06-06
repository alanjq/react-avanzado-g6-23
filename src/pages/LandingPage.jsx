import LinearProgress from '@mui/joy/LinearProgress';
import { Grid } from "@mui/material";
import React from "react";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProducts";
import Welcome from "./Landing/Welcome";


export const LandingPage = () => {
    const { products, isLoading, setPage } = useProducts()

    return (<div className='bg-red-100'>
        <Welcome />
        <input type="number" defaultValue={0} onChange={setPage} />
        <hr />
        {isLoading ? <LinearProgress /> : <ProductList products={products} />}
    </div>)
}

export default LandingPage
