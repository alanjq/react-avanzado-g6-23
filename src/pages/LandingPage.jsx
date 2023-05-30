import React, { useEffect, useState } from "react";
import Welcome from "./Landing/Welcome";
import ProductList from "../components/ProductList";
import LinearProgress from '@mui/joy/LinearProgress';


export const LandingPage = () => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsloading] = useState(false)


    // Realizar la llamada a la API cuando el componente se cree
    useEffect(() => {
        setIsloading(true)
        fetch('https://jsonplaceholder.typicode.com/photos')
            // Si la promesa se resuelve
            .then((response) => response.json())
            .then((datos) => {
                setAllProducts(datos)
                setProducts(datos.slice(0, 20))
            })
            // Si la promesa falla
            .catch((error) => {
                console.log('ERROR DE API', error.message);
            })
            .finally(() => {
                // Desactivar el loader
                setTimeout(() => {
                    setIsloading(false)
                }, 1000);
            })
    }, [])

    useEffect(() => {
        const start = currentPage + 1 * 20
        const end = start + 20
        setProducts(allProducts.slice(start, end))
    }, [currentPage])

    const handleChange = ({ target }) => {
        setCurrentPage(target.value)
    }

    return (<div>
        <Welcome />
        <input type="number" defaultValue={0} onChange={handleChange} />
        <hr />
        {isLoading ? <LinearProgress /> : <ProductList products={products} />}
    </div>)
}

export default LandingPage
