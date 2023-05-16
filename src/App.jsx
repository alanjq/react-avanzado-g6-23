import React, { useState } from "react";
import Input from "./Input";
import Saludo from "./Saludo";
import { getMonth, getWeekDay } from './dateparts';

export const App = () => {
    // Fecha
    const date = new Date()
    const today = `${getWeekDay(date.getDay())} ${date.getDate()} de ${getMonth(date.getMonth())}`

    // Declaramos state para nombre
    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')

    return (<div>
        <p>Esta es mi app</p>
        <div>Nombre: <Input valor={nombre} setValor={setNombre} /></div>
        <div>Mensaje: <Input valor={mensaje} setValor={setMensaje} /></div>
        <div>Fecha: <Input valor={today} /></div>
        <Saludo nombre={nombre} tipoSaludo={mensaje} fecha={today} />
    </div>)
}

export default App
