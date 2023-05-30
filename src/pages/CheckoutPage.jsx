import React from "react";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { LinearProgress } from "@mui/joy";

export const CheckoutPage = () => {
    const { products, isLoading}  = useProducts()

    return (<div>CheckoutPage
        <hr />
        {isLoading ? <LinearProgress /> : <ProductList products={products} />}
    </div>)
}

export default CheckoutPage
