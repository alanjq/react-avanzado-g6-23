import React, { useState } from "react";
// import { ShoppingCartContext } from "../Context";
// import AddProduct from "./AddProduct";

export const ProductItem = ({ product }) => {
    const [isAdded, setIsAdded] = useState(true)
    // let isItemOnCart = false
    // const context = useContext(ShoppingCartContext)

    return (
        <div className="border shadow-md py-2 px-2 rounded-md">
            <p>{product.title}</p>
            <img src={product.images[0]} />
            {/* Botón: Agregar o quitar al carrito */}
            <p className={!isAdded ? 'text-blue-600' : 'text-red-600'}>{isAdded ? 'Eliminar del carrito' : 'Agregar a carrito'}</p>
        </div>
    )
}

export default ProductItem
