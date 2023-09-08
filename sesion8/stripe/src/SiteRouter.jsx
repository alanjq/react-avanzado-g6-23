/* eslint-disable no-undef */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from './shop/Product';
import Cart from "./shop/Cart";


export const SiteRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<ProductPage />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default SiteRouter
