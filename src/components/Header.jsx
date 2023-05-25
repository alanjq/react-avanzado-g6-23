import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Header = ({ handleThemeChange }) => {
    // Consumir un valor del contexto
    const { styles } = useContext(AppContext)


    return (<nav style={styles}>
        Tema:
        <select onChange={handleThemeChange}>
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
        </select>

    </nav>)
}

export default Header
