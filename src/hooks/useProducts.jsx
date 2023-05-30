import { useState, useEffect } from 'react'

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    // Realizar la llamada a la API cuando el componente se cree
    useEffect(() => {
        setIsloading(true)
        fetch('https://jsonplaceholder.typicode.com/photos')
            // Si la promesa se resuelve
            .then((response) => response.json())
            .then((datos) => {
                setAllProducts(datos)
                setProducts(datos.slice(0, 20))
                setCurrentPage(0)
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


    const setPage = ({ target }) => setCurrentPage(target.value)

    return {
        products,
        isLoading,
        setPage,
    }
}

export default useProducts
