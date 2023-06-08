import React, { useState, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../Context";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";

export const ProductItem = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false)

    const context = useContext(ShoppingCartContext)
    
    useEffect(()=>{
        let isItemOnCart = context.cartProducts.filter(p => p.id == product.id).length
        console.log(isItemOnCart)
        setIsAdded(isItemOnCart>0)
    }, [])

    useEffect(() => {
        let isItemOnCart = context.cartProducts.filter(p => p.id == product.id).length
        console.log(isItemOnCart)
        setIsAdded(isItemOnCart>0)
    }, [context.cartProducts.length])


    return (
        <div className="border shadow-md py-2 px-2 rounded-md">
            <p>{product.title}</p>
            <img src={product.images[0]} />
            {/* Botón: Agregar o quitar al carrito */}
            {isAdded ? <RemoveProduct item={product}/> : <AddProduct item={product}/>}
        </div>
    )
}

export default ProductItem
