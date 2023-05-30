import React from "react";

export const ProductList = ({ products }) => {
    console.log('lista de productos', products);
    return (<article>
        {products.map((item, index)=><div key={index}>
            <p>{item.title}</p>
            <img src={item.thumbnailUrl} />
        </div>
        )}
    </article>)
}

export default ProductList
