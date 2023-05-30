import {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import CheckoutPage from './pages/CheckoutPage'
import SiteLayout from "./SiteLayout";
import { CartContext } from "./context/CartContext";


export const SiteRouter = () => {
    const [listaArticulos, setListaArticulos] = useState([])


    // items:[
    //     {
    //         articleName: "magazine",
    //         price: 15,
    //         stock: 1,
    //         picture: 'none',
    //     }
    // ]

    return(   
        <CartContext.Provider value={{listaArticulos, setListaArticulos}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SiteLayout />}>
                        <Route index element={<LandingPage />} />
                        <Route path="shopping-cart" element={<CartPage />} />
                        {/* TODO: Definir variable para producto */}
                        <Route path="product" element={<ProductPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="checkout" element={<CheckoutPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    ) 
}

export default SiteRouter
