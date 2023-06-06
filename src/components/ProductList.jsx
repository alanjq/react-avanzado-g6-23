import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

export const ProductList = ({ products }) => {
    console.log('lista de productos', products);
    return (<Grid item xs={8} display={"flow"}>
        {products.map((item, index) => <ProductItem key={index} product={item} />)}
    </Grid>)
}

export default ProductList
