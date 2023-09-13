import React, { useEffect, useState } from "react";

export const Species = () => {
    const [species, setSpecies] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
            .then(response => response.json())
            .then((response) => {
                setSpecies(response.results)
                console.log('RESPUESTA', response);
            })
            .catch((error) => {
                console.error('Ocurrió un error al consultar la API.', error.message);
            })
    }, [])

    return (<div>
        {species.map((specie, i) => <div key={i}>{specie.name}</div>)}
    </div>)
}

export default Species
