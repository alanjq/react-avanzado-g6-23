import React from "react";

export const ProductItem = ({ product }) => {

    return (
        <div>
            <p>{product.title}</p>
            <img src={product.images[0]} />
            {/* Botón: Agregar o quitar al carrito */}
        </div>
    )
}

export default ProductItem
