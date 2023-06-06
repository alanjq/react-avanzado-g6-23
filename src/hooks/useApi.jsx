import { useState, useEffect } from 'react'

const useApi = (endpoint) => {
    const [allData, setAllData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    // Realizar la llamada a la API cuando el componente se cree
    useEffect(() => {
        setIsloading(true)
        fetch(`https://api.escuelajs.co/api/v1/${endpoint}`)
            // Si la promesa se resuelve
            .then((response) => response.json())
            .then((datos) => {
                setAllData(datos)
                setData(datos.slice(0, 20))
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
        setData(allData.slice(start, end))
    }, [currentPage])


    const setPage = ({ target }) => setCurrentPage(target.value)

    return {
        data,
        isLoading,
        setPage,
    }
}

export default useApi
