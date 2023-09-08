import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Header = ({ handleThemeChange, languageSwitcher }) => {
    // Consumir un valor del contexto
    const { styles } = useContext(AppContext)

    const handleLanguageSwitch = ({ target }) => {
        languageSwitcher(target.value)
    }

    return (<nav style={styles}>
        Tema:
        <select onChange={handleThemeChange}>
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
        </select>

        Idioma:
        <select onChange={handleLanguageSwitch}>
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>

    </nav>)
}

export default Header
