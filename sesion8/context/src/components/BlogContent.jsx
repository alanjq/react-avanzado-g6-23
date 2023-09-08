import React, { useContext } from "react";
import RecentNews from './RecentNews'
import { AppContext } from "../context/AppContext";

export const BlogContent = () => {
    const {styles} = useContext(AppContext)

    return (
        <article style={styles}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            <RecentNews style={styles} />
        </article>)
}

export default BlogContent
