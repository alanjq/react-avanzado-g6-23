import React, { useEffect, useState } from "react";
import Welcome from "./Landing/Welcome";
import ProductList from "../components/ProductList";
import LinearProgress from '@mui/joy/LinearProgress';
import useProducts from "../hooks/useProducts";


export const LandingPage = () => {
    const { products, isLoading, setPage } = useProducts()

    return (<div>
        <Welcome />
        <input type="number" defaultValue={0} onChange={setPage} />
        <hr />
        {isLoading ? <LinearProgress /> : <ProductList products={products} />}
    </div>)
}

export default LandingPage
