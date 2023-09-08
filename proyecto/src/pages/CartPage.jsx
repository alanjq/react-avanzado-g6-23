import { useContext } from "react";
import { ShoppingCartProvider } from "../Context";


export const CartPage = () => {
    const contextCart = useContext(ShoppingCartProvider);

    console.log(contextCart)
    return (

        <div>CartPage</div>
    )
}

export default CartPage
