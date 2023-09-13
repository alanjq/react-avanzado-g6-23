import React from "react";

export const Input = ({ valor, setValor }) => {
    // Evento de cambio en el input
    const handleInputChange = (evento) => {
        // Si hay método setValor lo llamamos y le enviamos el valor del input
        if (setValor) {
            setValor(evento.target.value)
        }
    }

    return (<input
        type="text"
        defaultValue={valor}
        onChange={handleInputChange} />
    )
}

export default Input
