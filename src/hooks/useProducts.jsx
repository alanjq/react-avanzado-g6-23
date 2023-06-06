import { useState, useEffect } from 'react'
import API from './getFromAPI'

const useProducts = () => {
    const [isLoading, setIsloading] = useState(false)
    const [products, setProducts] = useState([])

    // Realizar la llamada a la API cuando el componente se cree
    useEffect(() => {
        setIsloading(true)
        API.get('products')
            // Si la promesa se resuelve
            .then((response) => response.json())
            .then((datos) => {
                console.log('datos', datos);
                setProducts(datos)
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


    return {
        products,
        isLoading,
    }
}

export default useProducts
