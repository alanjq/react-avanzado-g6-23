/* eslint-disable no-undef */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import CheckoutPage from './pages/CheckoutPage'
import SiteLayout from "./SiteLayout";
import { ShoppingCartProvider } from "./Context";


export const SiteRouter = () => {


    return(   
        <ShoppingCartProvider >
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
        </ShoppingCartProvider>
    ) 
}

export default SiteRouter
