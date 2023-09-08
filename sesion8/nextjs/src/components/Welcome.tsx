import React from "react";

// Definimos el tipo de objeto a recibir en los props
interface WelcomeProps {
    name: string,
    age: number
}

export const Welcome = ({ name, age }: WelcomeProps) => {

    return (<div>Hola {name} - ({age})</div>)
}

export default Welcome
