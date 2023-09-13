import React from "react";

export const Saludo = ({ nombre, fecha, tipoSaludo }) => {
    return (<div>{tipoSaludo} {nombre} - {fecha}</div>)
}

export default Saludo
