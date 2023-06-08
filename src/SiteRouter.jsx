/* eslint-disable no-undef */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import CheckoutPage from './pages/CheckoutPage'
import SiteLayout from "./SiteLayout";
import { ShoppingCartProvider } from "./Context";
// Importar ApolloClient para las peticiones de GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const SiteRouter = () => {

    // Creamos cliente de conexión de ApolloClient
    console.log(import.meta.env)
    const client = new ApolloClient({
        uri: 'https://graphql.datocms.com/',
        cache: new InMemoryCache(),
        headers: {
            authorization: `bearer ${import.meta.env.VITE_CMS_API}`
        }
    });

    // Usamos el contexto de ApolloProvider para usar la conexión para realizar consultas desde otros componentes

    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    )
}

export default SiteRouter
