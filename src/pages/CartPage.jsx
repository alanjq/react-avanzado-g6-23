import {useContext} from "react";
import { CartContext } from "../context/CartContext";


export const CartPage = () => {
        const contextCart = useContext(CartContext);

        console.log(contextCart)
    return (

    <div>CartPage</div>
    )
}

export default CartPage
