import React from "react";
import ProductItem from '../components/ProductItem'

export const ProductList = ({ products }) => {

    return (<section className="grid grid-cols-4 gap-5">
        {products.map((item, index) => <ProductItem product={item} key={index} /> )}
    </section>)
}

export default ProductList
