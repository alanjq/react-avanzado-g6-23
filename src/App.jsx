import React, { useState } from "react";
import Header from "./components/Header";
import BlogContent from "./components/BlogContent";
import { AppContext } from "./context/AppContext";
import Blog from "./components/Blog";
import { LanguageContext } from "./context/LanguageContext";

export const App = () => {

  // #region Ejemplo context 1: Valores enviados al contexto
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const styles = {
    backgroundColor: isDarkTheme ? '#000' : '#FFF',
    color: !isDarkTheme ? '#000' : '#FFF',
    width: '100%',
    padding: '1em 2em',
    borderBottom: 'gray 2px solid'
  }

  const handleThemeChange = (e) => {
    if (e.target.value == 'oscuro') {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }
  // #endregion / Ejemplo context 1: Valores enviados al contexto

  //#region Ejemplo Context 2
  const LANGUAGES = { en: 'English', es: 'Español' }
  const [language, setLanguage] = useState('es')
  //#endregion / Ejemplo Context 2

  return (<AppContext.Provider value={{ isDarkTheme, setIsDarkTheme, styles }}>
    <div>
      <Header handleThemeChange={handleThemeChange} languageSwitcher={setLanguage} />

      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>

      <LanguageContext.Provider value={{ language }}>
        <Blog />
      </LanguageContext.Provider>

      <BlogContent />
    </div>
  </AppContext.Provider>)

}

export default App
