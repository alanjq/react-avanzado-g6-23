import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

export const ProductList = ({ products }) => {
    console.log('lista de productos', products);
    return (<section className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((item, index) => <ProductItem key={index} product={item} />)}
    </section>)
}

export default ProductList
