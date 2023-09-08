import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Blog = () => {
    const { language } = useContext(LanguageContext)

    return (<article>{
        language === 'es'
            ? <h1>Blog en español</h1>
            : <h1>Blog in english</h1>
    }</article>)
}

export default Blog
