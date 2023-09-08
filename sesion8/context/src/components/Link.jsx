import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const LinkPage = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext)

    return (<>
        <div>Link to page</div>
        <span onClick={() => setIsDarkTheme(!isDarkTheme)}>Cambiar a tema oscuro</span>
    </>
    )
}

export default LinkPage
